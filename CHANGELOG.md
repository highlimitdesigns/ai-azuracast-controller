# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial open source release preparation
- Comprehensive documentation for contributors
- Example environment configuration

## [1.0.0] - 2025-01-23

### Added
- AI-powered playlist generation using OpenAI GPT-4
- Real-time listener analysis with geographic and device distribution
- Smart scheduling recommendations based on listener patterns
- Station management commands for AzuraCast integration
- CLI interface with Commander.js
- Comprehensive logging with Winston
- Environment-based configuration
- Cross-platform support (Windows, macOS, Linux)

### Features
- **Playlist Generation**
  - Generate AI-powered song suggestions based on station genre and theme
  - Customizable song count (default: 10)
  - Station-specific recommendations
  
- **Listener Analysis**
  - Real-time listener statistics
  - Device distribution analysis (mobile/desktop/other)
  - Geographic distribution with connection times
  - Connection duration tracking
  
- **Schedule Recommendations**
  - AI-powered scheduling advice
  - Device-optimized content strategies
  - Geographic and time-based scheduling
  - Engagement optimization tactics
  
- **Station Management**
  - List all available stations
  - View detailed station information
  - Manage station playlists
  - AzuraCast API integration

### Technical
- Node.js CLI application with global installation support
- Modular architecture with separate services and commands
- Error handling and logging throughout
- Environment variable configuration
- API integration with AzuraCast and OpenAI

### Dependencies
- `axios` ^1.10.0 - HTTP client for API requests
- `commander` ^14.0.0 - CLI framework
- `dotenv` ^17.2.0 - Environment variable management
- `openai` ^5.10.2 - OpenAI API integration
- `winston` ^3.17.0 - Logging framework

### Commands
- `radio generate playlist` - Generate AI playlist suggestions
- `radio schedule analyze` - Analyze listener patterns
- `radio schedule recommend` - Get scheduling recommendations
- `radio manage stations` - List all stations
- `radio manage station` - View station details
- `radio manage playlists` - List station playlists

[Unreleased]: https://github.com/your-username/ai-radio-controller/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/your-username/ai-radio-controller/releases/tag/v1.0.0
