# Configuration Guide

Learn how to configure AI AzuraCast Controller for optimal performance with your AzuraCast instance and OpenAI integration.

## 🔧 Environment Variables

AI AzuraCast Controller uses environment variables for configuration. You can set these in multiple ways:

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `AZURACAST_BASE_URL` | Your AzuraCast instance URL | `https://radio.example.com` |
| `AZURACAST_API_KEY` | AzuraCast API key | `abc123def456...` |
| `OPENAI_API_KEY` | OpenAI API key | `sk-abc123def456...` |

### Optional Variables

| Variable | Description | Default | Example |
|----------|-------------|---------|---------|
| `LOG_LEVEL` | Logging level | `info` | `debug`, `warn`, `error` |
| `OPENAI_MODEL` | OpenAI model to use | `gpt-3.5-turbo` | `gpt-4`, `gpt-4-turbo` |
| `REQUEST_TIMEOUT` | API request timeout (ms) | `30000` | `60000` |
| `MAX_RETRIES` | Max API retry attempts | `3` | `5` |

## 📁 Configuration Methods

### Method 1: .env File (Recommended)

Create a `.env` file in your working directory:

```bash
# .env file
AZURACAST_BASE_URL=https://your-azuracast-instance.com
AZURACAST_API_KEY=your_api_key_here
OPENAI_API_KEY=sk-your_openai_api_key_here

# Optional settings
LOG_LEVEL=info
OPENAI_MODEL=gpt-3.5-turbo
REQUEST_TIMEOUT=30000
MAX_RETRIES=3
```

### Method 2: System Environment Variables

#### Windows (Command Prompt)
```cmd
setx AZURACAST_BASE_URL "https://your-azuracast-instance.com"
setx AZURACAST_API_KEY "your_api_key_here"
setx OPENAI_API_KEY "sk-your_openai_api_key_here"
```

#### Windows (PowerShell)
```powershell
[Environment]::SetEnvironmentVariable("AZURACAST_BASE_URL", "https://your-azuracast-instance.com", "User")
[Environment]::SetEnvironmentVariable("AZURACAST_API_KEY", "your_api_key_here", "User")
[Environment]::SetEnvironmentVariable("OPENAI_API_KEY", "sk-your_openai_api_key_here", "User")
```

#### macOS/Linux (Temporary)
```bash
export AZURACAST_BASE_URL="https://your-azuracast-instance.com"
export AZURACAST_API_KEY="your_api_key_here"
export OPENAI_API_KEY="sk-your_openai_api_key_here"
```

#### macOS/Linux (Persistent)
```bash
# Add to ~/.bashrc, ~/.zshrc, or ~/.profile
echo 'export AZURACAST_BASE_URL="https://your-azuracast-instance.com"' >> ~/.bashrc
echo 'export AZURACAST_API_KEY="your_api_key_here"' >> ~/.bashrc
echo 'export OPENAI_API_KEY="sk-your_openai_api_key_here"' >> ~/.bashrc

# Reload shell configuration
source ~/.bashrc
```

### Method 3: Command Line Arguments

Some settings can be overridden via command line:

```bash
# Override log level
radio --log-level debug generate playlist -s 5

# Use different OpenAI model
radio --openai-model gpt-4 generate playlist -s 5
```

## 🔑 API Key Configuration

### AzuraCast API Key Setup

1. **Access AzuraCast Admin Panel**
   - Log into your AzuraCast instance
   - Navigate to **Administration** → **API Keys**

2. **Create New API Key**
   - Click **"Add API Key"**
   - Enter a descriptive name (e.g., "AI Controller")
   - Set permissions:

#### Required Permissions
- ✅ **View Station Details** - Read station information
- ✅ **View Station Reports** - Access listener analytics
- ✅ **Manage Station Media** - Access media library
- ✅ **Manage Station Playlists** - Create and modify playlists

#### Optional Permissions (for advanced features)
- ✅ **Manage Station Broadcasting** - Control live streams
- ✅ **Manage Station Automation** - Modify scheduling
- ✅ **View Administration** - Access system-wide data

3. **Copy and Secure the Key**
   - Copy the generated API key
   - Store it securely (treat like a password)
   - Never commit it to version control

### OpenAI API Key Setup

1. **Create OpenAI Account**
   - Visit [OpenAI Platform](https://platform.openai.com/)
   - Sign up or log in to your account

2. **Generate API Key**
   - Go to **API Keys** section
   - Click **"Create new secret key"**
   - Give it a descriptive name
   - Copy the key (starts with `sk-`)

3. **Set Up Billing**
   - Add payment method in **Billing** section
   - Set usage limits to control costs
   - Monitor usage in the dashboard

4. **Model Access**
   - Ensure you have access to required models
   - Default: `gpt-3.5-turbo` (cost-effective)
   - Premium: `gpt-4` (higher quality, more expensive)

## ⚙️ Advanced Configuration

### Logging Configuration

Control logging output and verbosity:

```bash
# Set log level
export LOG_LEVEL=debug  # debug, info, warn, error

# Log to file
radio generate playlist -s 5 > output.log 2>&1

# View logs in real-time
tail -f combined.log
```

### OpenAI Model Selection

Choose the right model for your needs:

| Model | Speed | Quality | Cost | Best For |
|-------|-------|---------|------|----------|
| `gpt-3.5-turbo` | Fast | Good | Low | General use, high volume |
| `gpt-4` | Slower | Excellent | High | Complex analysis, quality |
| `gpt-4-turbo` | Medium | Excellent | Medium | Balanced performance |

```bash
# Set model in environment
export OPENAI_MODEL=gpt-4

# Or specify per command
radio --openai-model gpt-4 generate playlist -s 5
```

### Network Configuration

Adjust timeouts and retry behavior:

```bash
# Increase timeout for slow connections
export REQUEST_TIMEOUT=60000  # 60 seconds

# Increase retries for unreliable networks
export MAX_RETRIES=5

# Disable SSL verification (not recommended for production)
export NODE_TLS_REJECT_UNAUTHORIZED=0
```

### Proxy Configuration

If you're behind a corporate proxy:

```bash
# HTTP proxy
export HTTP_PROXY=http://proxy.company.com:8080
export HTTPS_PROXY=http://proxy.company.com:8080

# Proxy with authentication
export HTTP_PROXY=http://username:password@proxy.company.com:8080
```

## 🔒 Security Best Practices

### API Key Security

1. **Never commit API keys to version control**
   ```bash
   # Add .env to .gitignore
   echo ".env" >> .gitignore
   ```

2. **Use environment-specific configurations**
   ```bash
   # Development
   .env.development

   # Production
   .env.production

   # Testing
   .env.test
   ```

3. **Rotate keys regularly**
   - Generate new keys monthly
   - Revoke old keys after rotation
   - Monitor usage for anomalies

4. **Limit key permissions**
   - Only grant necessary permissions
   - Use separate keys for different purposes
   - Monitor key usage in AzuraCast logs

### Network Security

1. **Use HTTPS only**
   ```bash
   # Ensure your AzuraCast URL uses HTTPS
   AZURACAST_BASE_URL=https://radio.example.com  # ✅ Good
   AZURACAST_BASE_URL=http://radio.example.com   # ❌ Insecure
   ```

2. **Validate SSL certificates**
   ```bash
   # Don't disable SSL verification in production
   # Only use for testing with self-signed certificates
   export NODE_TLS_REJECT_UNAUTHORIZED=1  # Default (secure)
   ```

3. **Use firewall rules**
   - Restrict access to AzuraCast admin panel
   - Use VPN for remote access
   - Monitor access logs

## ✅ Configuration Validation

Test your configuration:

```bash
# Test AzuraCast connection
radio manage stations

# Test OpenAI connection
radio generate playlist -s 1 -c 1

# Validate all settings
radio --validate-config
```

### Common Configuration Issues

#### AzuraCast Connection Failed
```bash
# Check URL format
curl -I https://your-azuracast-instance.com

# Test API key
curl -H "X-API-Key: your_key" https://your-azuracast-instance.com/api/stations
```

#### OpenAI API Errors
```bash
# Check API key format (should start with sk-)
echo $OPENAI_API_KEY

# Test API access
curl -H "Authorization: Bearer $OPENAI_API_KEY" https://api.openai.com/v1/models
```

#### Permission Denied
```bash
# Check AzuraCast API key permissions
# Ensure key has required permissions in AzuraCast admin panel
```

## 📊 Configuration Examples

### Development Setup
```bash
# .env.development
AZURACAST_BASE_URL=http://localhost:8080
AZURACAST_API_KEY=dev_api_key_here
OPENAI_API_KEY=sk-dev_key_here
LOG_LEVEL=debug
OPENAI_MODEL=gpt-3.5-turbo
REQUEST_TIMEOUT=10000
```

### Production Setup
```bash
# .env.production
AZURACAST_BASE_URL=https://radio.yourcompany.com
AZURACAST_API_KEY=prod_api_key_here
OPENAI_API_KEY=sk-prod_key_here
LOG_LEVEL=warn
OPENAI_MODEL=gpt-4
REQUEST_TIMEOUT=30000
MAX_RETRIES=3
```

### High-Volume Setup
```bash
# .env.high-volume
AZURACAST_BASE_URL=https://radio.yourcompany.com
AZURACAST_API_KEY=api_key_here
OPENAI_API_KEY=sk-key_here
LOG_LEVEL=error
OPENAI_MODEL=gpt-3.5-turbo  # Faster and cheaper
REQUEST_TIMEOUT=15000
MAX_RETRIES=5
```

## 🎯 Next Steps

After configuring your environment:

1. **[Follow the Quick Start guide](quick-start.md)** - Test your setup
2. **[Learn about playlist generation](usage/playlist.md)** - Start using AI features
3. **[Explore listener analysis](usage/analysis.md)** - Understand your audience
4. **[Set up monitoring](resources/troubleshooting.md)** - Monitor performance

---

**Configuration complete?** → [Continue to Quick Start](quick-start.md)
