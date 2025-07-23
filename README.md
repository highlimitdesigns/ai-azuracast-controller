# AI AzuraCast Controller

[![npm version](https://badge.fury.io/js/ai-azuracast-controller.svg)](https://badge.fury.io/js/ai-azuracast-controller)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

An intelligent radio station management CLI tool that uses AI to analyze listener patterns and generate optimized scheduling recommendations for AzuraCast radio stations.

**Created by [High Limit Designs](https://highlimitdesigns.com)**

## 🚀 Features

- **AI-Powered Playlist Generation**: Generate intelligent song suggestions based on station genre and theme
- **Real-Time Listener Analysis**: Analyze current listeners with device, geographic, and connection data
- **Smart Schedule Recommendations**: Get AI-powered scheduling advice based on listener patterns
- **Station Management**: Comprehensive tools for managing AzuraCast stations and playlists
- **Cross-Platform CLI**: Works on Windows, macOS, and Linux

## 📦 Installation

### Global Installation (Recommended)

```bash
npm install -g ai-azuracast-controller
```

### Local Installation

```bash
npm install ai-azuracast-controller
```

### From Source

```bash
git clone https://github.com/highlimitdesigns/ai-azuracast-controller.git
cd ai-azuracast-controller
npm install
npm link
```

## ⚙️ Configuration

Create a `.env` file in your project root or set environment variables:

```bash
AZURACAST_BASE_URL=https://your-azuracast-instance.com
AZURACAST_API_KEY=your_api_key_here
OPENAI_API_KEY=your_openai_api_key_here
```

### Getting API Keys

1. **AzuraCast API Key**: 
   - Log into your AzuraCast dashboard
   - Go to Administration → API Keys
   - Create a new API key with appropriate permissions

2. **OpenAI API Key**:
   - Visit [OpenAI Platform](https://platform.openai.com/)
   - Create an account and generate an API key
   - Ensure you have credits available for API usage

## 🎵 Usage

### Playlist Generation

Generate AI-powered playlist suggestions for your station:

```bash
radio generate playlist -s <station_id> -c <count>
```

**Example:**
```bash
radio generate playlist -s 5 -c 15
```

**Output:**
- Station information and genre
- AI-generated song suggestions
- Manual playlist creation instructions

### Listener Analysis

Analyze your station's current listeners in real-time:

```bash
radio schedule analyze -s <station_id>
```

**Example:**
```bash
radio schedule analyze -s 5
```

**Provides:**
- Total and unique listener counts
- Device distribution (mobile/desktop/other)
- Geographic distribution with connection times
- Stream details and connection durations

### Schedule Recommendations

Get AI-powered scheduling recommendations:

```bash
radio schedule recommend -s <station_id>
```

**Example:**
```bash
radio schedule recommend -s 5
```

**Generates:**
- Device-optimized content strategies
- Geographic and time-based scheduling advice
- Content type suggestions
- Engagement optimization tactics

### Station Management

List all available stations:
```bash
radio manage stations
```

View specific station details:
```bash
radio manage station -s <station_id>
```

List station playlists:
```bash
radio manage playlists -s <station_id>
```

## 🏗️ Architecture

### Core Services

- **AzuraCast Service**: Handles all AzuraCast API interactions
- **OpenAI Service**: Manages AI integration for playlist and scheduling recommendations
- **Playlist Service**: Processes playlist generation and management
- **Schedule Service**: Analyzes listener patterns and generates insights

### Command Structure

- **Generate Commands**: AI-powered playlist generation
- **Schedule Commands**: Listener analysis and scheduling recommendations
- **Manage Commands**: Station and playlist management

## 📊 Data Flow

```
AzuraCast API → Data Processing → AI Analysis → Recommendations
     ↓              ↓               ↓             ↓
Station Info → Listener Data → OpenAI → Formatted Output
```

## 🛠️ Development

### Prerequisites

- Node.js 16+ 
- npm or yarn
- AzuraCast instance with API access
- OpenAI API key

### Setup

1. Clone the repository:
```bash
git clone https://github.com/highlimitdesigns/ai-azuracast-controller.git
cd ai-azuracast-controller
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
# Edit .env with your API keys
```

4. Link for development:
```bash
npm link
```

### Project Structure

```
src/
├── commands/          # CLI command implementations
│   ├── generate.js    # Playlist generation commands
│   ├── manage.js      # Station management commands
│   └── schedule.js    # Scheduling and analysis commands
├── services/          # Core business logic
│   ├── azuracast.js   # AzuraCast API client
│   ├── openai.js      # OpenAI integration
│   ├── playlist.js    # Playlist management
│   └── schedule.js    # Scheduling logic
└── utils/             # Utility functions
    └── logger.js      # Logging configuration
```

### Available Scripts

```bash
npm start              # Run the CLI
npm run link           # Link for global usage
npm run unlink         # Unlink global installation
npm run list-stations  # Quick station listing
npm run generate       # Quick playlist generation
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Add tests if applicable
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Style

- Use ESLint configuration
- Follow existing code patterns
- Add JSDoc comments for new functions
- Include error handling

## 📝 Examples

### Complete Workflow Example

```bash
# 1. List available stations
radio manage stations

# 2. Analyze listeners for station 5
radio schedule analyze -s 5

# 3. Get scheduling recommendations
radio schedule recommend -s 5

# 4. Generate playlist suggestions
radio generate playlist -s 5 -c 20

# 5. View station playlists
radio manage playlists -s 5
```

### Integration Example

```javascript
const { PlaylistService } = require('ai-azuracast-controller');

const playlistService = new PlaylistService();
const suggestions = await playlistService.generatePlaylistForStation(5, 10);
console.log(suggestions);
```

## 🐛 Troubleshooting

### Common Issues

**API Connection Errors:**
- Verify your AzuraCast URL and API key
- Check network connectivity
- Ensure API endpoints are accessible

**OpenAI API Errors:**
- Verify your OpenAI API key
- Check your OpenAI account credits
- Monitor rate limits

**Data Processing Issues:**
- Check log files: `error.log` and `combined.log`
- Verify station ID exists
- Ensure station has listener data

### Debug Mode

Enable detailed logging:
```bash
DEBUG=* radio generate playlist -s 5
```

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [AzuraCast](https://www.azuracast.com/) for the excellent radio station software
- [OpenAI](https://openai.com/) for AI capabilities
- [Commander.js](https://github.com/tj/commander.js/) for CLI framework

## 📞 Support

- 📧 Email: [contact@highlimitdesigns.com]
- 🐛 Issues: [GitHub Issues](https://github.com/highlimitdesigns/ai-azuracast-controller/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/highlimitdesigns/ai-azuracast-controller/discussions)

## 🗺️ Roadmap

- [ ] Historical listener analytics
- [ ] Automated playlist scheduling
- [ ] Social media integration
- [ ] Web dashboard interface
- [ ] Multi-station management
- [ ] Advanced AI music analysis
- [ ] Real-time listener notifications

---

**Made with ❤️ for the radio community**
