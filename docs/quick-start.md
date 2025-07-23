# Quick Start Guide

Get AI AzuraCast Controller up and running in 5 minutes! This guide will walk you through the essential steps to start using AI-powered radio station management.

## 🚀 5-Minute Setup

### Step 1: Install the CLI (1 minute)

```bash
# Install globally
npm install -g ai-azuracast-controller

# Verify installation
radio --version
```

### Step 2: Configure API Keys (2 minutes)

Create a `.env` file in your working directory:

```bash
# Create .env file
cat > .env << EOF
AZURACAST_BASE_URL=https://your-azuracast-instance.com
AZURACAST_API_KEY=your_api_key_here
OPENAI_API_KEY=sk-your_openai_api_key_here
EOF
```

> **Need API keys?** See the [Configuration Guide](configuration.md) for detailed setup instructions.

### Step 3: Test Your Setup (1 minute)

```bash
# Test AzuraCast connection
radio manage stations

# You should see a list of your stations
```

### Step 4: Generate Your First AI Playlist (1 minute)

```bash
# Replace '5' with your station ID
radio generate playlist -s 5 -c 10

# This generates 10 AI-powered song suggestions
```

🎉 **Congratulations!** You're now using AI to enhance your radio station management.

## 🎯 Essential Commands

Here are the most important commands to get you started:

### Station Management
```bash
# List all stations
radio manage stations

# View specific station details
radio manage station -s 5

# List station playlists
radio manage playlists -s 5
```

### AI-Powered Features
```bash
# Generate playlist suggestions
radio generate playlist -s 5 -c 15

# Analyze current listeners
radio schedule analyze -s 5

# Get scheduling recommendations
radio schedule recommend -s 5
```

### Help and Information
```bash
# General help
radio --help

# Command-specific help
radio generate --help
radio schedule --help
radio manage --help
```

## 📊 Your First Workflow

Let's walk through a complete workflow for optimizing your radio station:

### 1. Understand Your Station
```bash
# Get station information
radio manage station -s 5

# Expected output:
# Station: My Rock Station
# Genre: Rock
# Description: Classic and modern rock hits
# Current listeners: 45
```

### 2. Analyze Your Audience
```bash
# Analyze current listeners
radio schedule analyze -s 5

# Expected output:
# Total Listeners: 45
# Unique Listeners: 42
# Device Distribution:
#   Mobile: 60% (27 listeners)
#   Desktop: 35% (16 listeners)
#   Other: 5% (2 listeners)
# Geographic Distribution:
#   United States: 70%
#   Canada: 15%
#   United Kingdom: 10%
#   Other: 5%
```

### 3. Get AI Recommendations
```bash
# Get scheduling recommendations
radio schedule recommend -s 5

# Expected output:
# AI Scheduling Recommendations for Station 5:
# 
# Mobile-First Strategy (60% mobile listeners):
# - Prioritize shorter songs during peak mobile hours
# - Include more contemporary hits for mobile audience
# 
# Geographic Targeting:
# - Schedule North American content during peak hours
# - Consider time zone differences for content timing
```

### 4. Generate Smart Playlists
```bash
# Generate AI-powered playlist
radio generate playlist -s 5 -c 20

# Expected output:
# AI Playlist Suggestions for "My Rock Station":
# 
# 1. "Bohemian Rhapsody" by Queen
# 2. "Sweet Child O' Mine" by Guns N' Roses
# 3. "Stairway to Heaven" by Led Zeppelin
# [... 17 more suggestions]
# 
# Manual Playlist Creation:
# 1. Go to your AzuraCast dashboard
# 2. Navigate to Station 5 → Playlists
# 3. Create new playlist with these suggestions
```

## 🎵 Real-World Examples

### Example 1: Morning Show Preparation
```bash
# Analyze morning audience (run at 8 AM)
radio schedule analyze -s 5

# Generate upbeat morning playlist
radio generate playlist -s 5 -c 25

# Get recommendations for morning programming
radio schedule recommend -s 5
```

### Example 2: Weekend Programming
```bash
# Check weekend listener patterns
radio schedule analyze -s 5

# Generate weekend-appropriate content
radio generate playlist -s 5 -c 30

# Plan weekend schedule based on AI insights
```

### Example 3: Multi-Station Management
```bash
# Check all stations
radio manage stations

# Analyze each station
radio schedule analyze -s 1
radio schedule analyze -s 2
radio schedule analyze -s 3

# Generate playlists for each
radio generate playlist -s 1 -c 15
radio generate playlist -s 2 -c 15
radio generate playlist -s 3 -c 15
```

## 🔧 Customization Options

### Playlist Generation Options
```bash
# Generate more suggestions
radio generate playlist -s 5 -c 50

# Use different AI model (requires OpenAI access)
radio --openai-model gpt-4 generate playlist -s 5 -c 10

# Enable debug logging
radio --log-level debug generate playlist -s 5 -c 10
```

### Analysis Options
```bash
# Detailed listener analysis
radio schedule analyze -s 5 --detailed

# Export analysis to file
radio schedule analyze -s 5 > listener-report.txt

# Analyze multiple stations
for station in 1 2 3; do
  echo "=== Station $station ===" >> report.txt
  radio schedule analyze -s $station >> report.txt
done
```

## 🐛 Quick Troubleshooting

### Common Issues and Solutions

#### "Command not found: radio"
```bash
# Check if globally installed
npm list -g ai-azuracast-controller

# If not installed, install globally
npm install -g ai-azuracast-controller

# Check PATH
echo $PATH | grep npm
```

#### "API connection failed"
```bash
# Test AzuraCast URL
curl -I $AZURACAST_BASE_URL

# Test API key
curl -H "X-API-Key: $AZURACAST_API_KEY" $AZURACAST_BASE_URL/api/stations

# Check environment variables
echo $AZURACAST_BASE_URL
echo $AZURACAST_API_KEY
```

#### "OpenAI API error"
```bash
# Check API key format
echo $OPENAI_API_KEY | grep "^sk-"

# Test OpenAI connection
curl -H "Authorization: Bearer $OPENAI_API_KEY" https://api.openai.com/v1/models

# Check OpenAI credits
# Visit https://platform.openai.com/usage
```

#### "No stations found"
```bash
# Verify API key permissions in AzuraCast
# Ensure key has "View Station Details" permission

# Check station IDs
radio manage stations

# Use correct station ID
radio generate playlist -s [correct_station_id] -c 10
```

## 📈 Performance Tips

### Optimize for Speed
```bash
# Use faster OpenAI model
export OPENAI_MODEL=gpt-3.5-turbo

# Reduce timeout for faster responses
export REQUEST_TIMEOUT=15000

# Generate smaller playlists for testing
radio generate playlist -s 5 -c 5
```

### Optimize for Quality
```bash
# Use premium OpenAI model
export OPENAI_MODEL=gpt-4

# Increase timeout for complex requests
export REQUEST_TIMEOUT=60000

# Generate larger playlists for better variety
radio generate playlist -s 5 -c 30
```

### Optimize for Cost
```bash
# Use cost-effective model
export OPENAI_MODEL=gpt-3.5-turbo

# Generate smaller batches
radio generate playlist -s 5 -c 10

# Monitor OpenAI usage at https://platform.openai.com/usage
```

## 🎯 Next Steps

Now that you're up and running, explore these advanced features:

### Learn More About Features
- **[Playlist Generation](usage/playlist.md)** - Master AI-powered playlist creation
- **[Listener Analysis](usage/analysis.md)** - Deep dive into audience insights
- **[Schedule Recommendations](usage/scheduling.md)** - Optimize your programming
- **[Station Management](usage/management.md)** - Advanced station operations

### Integrate Into Your Workflow
- **[Set up automation](features/commands.md)** - Automate routine tasks
- **[Monitor performance](resources/troubleshooting.md)** - Track system health
- **[Join the community](community/support.md)** - Connect with other users

### Advanced Configuration
- **[API Reference](development/api-reference.md)** - Technical documentation
- **[Custom integrations](development/architecture.md)** - Build custom solutions
- **[Contributing](development/contributing.md)** - Help improve the project

## 💡 Pro Tips

### Daily Workflow
```bash
# Morning routine (save as morning.sh)
#!/bin/bash
echo "=== Morning Radio Analysis ==="
radio schedule analyze -s 5
radio generate playlist -s 5 -c 20
echo "=== Analysis Complete ==="
```

### Batch Operations
```bash
# Analyze all stations (save as analyze-all.sh)
#!/bin/bash
for station in $(radio manage stations --json | jq -r '.[].id'); do
  echo "Analyzing station $station..."
  radio schedule analyze -s $station > "station-$station-analysis.txt"
done
```

### Monitoring Script
```bash
# Check system health (save as health-check.sh)
#!/bin/bash
radio --version
radio manage stations > /dev/null && echo "✅ AzuraCast connection OK"
radio generate playlist -s 1 -c 1 > /dev/null && echo "✅ OpenAI connection OK"
```

---

**Ready to dive deeper?** → [Explore Playlist Generation](usage/playlist.md)
