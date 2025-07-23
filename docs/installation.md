# Installation Guide

This guide will walk you through installing AI AzuraCast Controller on your system.

## 📋 Prerequisites

Before installing, ensure you have:

- **Node.js 16+** - [Download from nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **AzuraCast instance** with API access
- **OpenAI API key** - [Get one from OpenAI](https://platform.openai.com/)

## 🚀 Installation Methods

### Method 1: Global Installation (Recommended)

Install globally to use the `radio` command from anywhere:

```bash
npm install -g ai-azuracast-controller
```

Verify installation:
```bash
radio --version
radio --help
```

### Method 2: NPX (No Installation)

Use without installing globally:

```bash
npx ai-azuracast-controller --help
npx ai-azuracast-controller generate playlist -s 5 -c 10
```

### Method 3: Local Project Installation

Install in a specific project:

```bash
mkdir my-radio-project
cd my-radio-project
npm init -y
npm install ai-azuracast-controller
```

Use with npx in the project:
```bash
npx radio --help
```

### Method 4: From Source (Development)

For contributors or advanced users:

```bash
git clone https://github.com/highlimitdesigns/ai-azuracast-controller.git
cd ai-azuracast-controller
npm install
npm link
```

## 🔧 Platform-Specific Instructions

### Windows

#### Using npm (Recommended)
```cmd
npm install -g ai-azuracast-controller
```

#### Using Chocolatey (Alternative)
```cmd
# Install Node.js first if not installed
choco install nodejs

# Then install the package
npm install -g ai-azuracast-controller
```

#### PowerShell Execution Policy
If you encounter execution policy errors:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### macOS

#### Using npm
```bash
npm install -g ai-azuracast-controller
```

#### Using Homebrew (Alternative)
```bash
# Install Node.js first if not installed
brew install node

# Then install the package
npm install -g ai-azuracast-controller
```

### Linux

#### Ubuntu/Debian
```bash
# Install Node.js if not installed
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install the package
npm install -g ai-azuracast-controller
```

#### CentOS/RHEL/Fedora
```bash
# Install Node.js if not installed
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs npm

# Install the package
npm install -g ai-azuracast-controller
```

#### Arch Linux
```bash
# Install Node.js if not installed
sudo pacman -S nodejs npm

# Install the package
npm install -g ai-azuracast-controller
```

## 🔑 API Keys Setup

After installation, you need to configure your API keys.

### 1. AzuraCast API Key

1. Log into your AzuraCast dashboard
2. Go to **Administration** → **API Keys**
3. Click **Add API Key**
4. Set permissions:
   - ✅ View Station Details
   - ✅ View Station Reports
   - ✅ Manage Station Media
   - ✅ Manage Station Playlists
5. Copy the generated API key

### 2. OpenAI API Key

1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Create an account or sign in
3. Go to **API Keys** section
4. Click **Create new secret key**
5. Copy the key (starts with `sk-`)
6. Ensure you have credits available

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in your working directory:

```bash
# AzuraCast Configuration
AZURACAST_BASE_URL=https://your-azuracast-instance.com
AZURACAST_API_KEY=your_api_key_here

# OpenAI Configuration
OPENAI_API_KEY=sk-your_openai_api_key_here
```

### System Environment Variables

#### Windows
```cmd
setx AZURACAST_BASE_URL "https://your-azuracast-instance.com"
setx AZURACAST_API_KEY "your_api_key_here"
setx OPENAI_API_KEY "sk-your_openai_api_key_here"
```

#### macOS/Linux
```bash
export AZURACAST_BASE_URL="https://your-azuracast-instance.com"
export AZURACAST_API_KEY="your_api_key_here"
export OPENAI_API_KEY="sk-your_openai_api_key_here"

# Add to ~/.bashrc or ~/.zshrc for persistence
echo 'export AZURACAST_BASE_URL="https://your-azuracast-instance.com"' >> ~/.bashrc
echo 'export AZURACAST_API_KEY="your_api_key_here"' >> ~/.bashrc
echo 'export OPENAI_API_KEY="sk-your_openai_api_key_here"' >> ~/.bashrc
```

## ✅ Verification

Test your installation:

```bash
# Check version
radio --version

# Test AzuraCast connection
radio manage stations

# Test basic functionality
radio --help
```

## 🔄 Updating

### Global Installation
```bash
npm update -g ai-azuracast-controller
```

### Local Installation
```bash
npm update ai-azuracast-controller
```

### Check for Updates
```bash
npm outdated -g ai-azuracast-controller
```

## 🗑️ Uninstallation

### Global Installation
```bash
npm uninstall -g ai-azuracast-controller
```

### Local Installation
```bash
npm uninstall ai-azuracast-controller
```

## 🐛 Troubleshooting

### Common Issues

#### Permission Errors (Linux/macOS)
```bash
# Use sudo for global installation
sudo npm install -g ai-azuracast-controller

# Or configure npm to use a different directory
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

#### Node.js Version Issues
```bash
# Check Node.js version
node --version

# Update Node.js if needed
npm install -g n
n latest
```

#### API Connection Issues
```bash
# Test AzuraCast connection
curl -H "X-API-Key: your_api_key" https://your-azuracast-instance.com/api/stations

# Test OpenAI connection
curl -H "Authorization: Bearer sk-your_key" https://api.openai.com/v1/models
```

#### Command Not Found
```bash
# Check if npm global bin is in PATH
npm config get prefix
echo $PATH

# Add npm global bin to PATH
export PATH=$(npm config get prefix)/bin:$PATH
```

### Getting Help

If you encounter issues:

1. Check the [Troubleshooting Guide](resources/troubleshooting.md)
2. Search [GitHub Issues](https://github.com/highlimitdesigns/ai-azuracast-controller/issues)
3. Ask in [GitHub Discussions](https://github.com/highlimitdesigns/ai-azuracast-controller/discussions)
4. Create a new issue with:
   - Operating system and version
   - Node.js version (`node --version`)
   - npm version (`npm --version`)
   - Error messages
   - Steps to reproduce

## 🎯 Next Steps

After successful installation:

1. **[Configure your environment](configuration.md)** - Set up API keys and preferences
2. **[Follow the Quick Start guide](quick-start.md)** - Get running in 5 minutes
3. **[Explore usage guides](usage/playlist.md)** - Learn about specific features
4. **[Join the community](community/support.md)** - Connect with other users

---

**Ready to start using AI AzuraCast Controller?** → [Continue to Configuration](configuration.md)
