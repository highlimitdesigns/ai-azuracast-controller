# AI Radio Controller - Developer Documentation

## Project Structure

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

## Service Implementations

### AzuraCast Service (`azuracast.js`)

```javascript
class AzuraCastService {
    // Core methods
    async getStations()              // GET /api/stations
    async getStationById(stationId)  // GET /api/station/{id}
    async getStationListeners(id)    // GET /api/station/{id}/listeners
    async getPlaylists(stationId)    // GET /api/station/{id}/playlists
    async createPlaylist(id, data)   // POST /api/station/{id}/playlists
    async updatePlaylist(id, data)   // PUT /api/station/{id}/playlists/{id}
}
```

### OpenAI Service (`openai.js`)

```javascript
class OpenAIService {
    // Core methods
    async generatePlaylist(stationInfo, count)     // Generate song suggestions
    async generateSchedulingAdvice(data)           // Generate schedule recommendations
    async analyzeSongMood(title, artist)          // Analyze song characteristics
}
```

### Playlist Service (`playlist.js`)

```javascript
class PlaylistService {
    // Core methods
    async generatePlaylistForStation(stationId, count)  // Generate station playlist
    async listStationPlaylists(stationId)              // List station playlists
}
```

### Schedule Service (`schedule.js`)

```javascript
class ScheduleService {
    // Core methods
    async analyzeListenerPatterns(stationId)           // Analyze listener data
    async generateScheduleRecommendations(stationId)   // Generate recommendations
    
    // Helper methods
    _groupListenersByLocation(listeners)               // Group by location
    _parseLocation(location)                           // Parse location string
    _analyzeDeviceTypes(listeners)                     // Analyze device usage
}
```

## Command Implementation Details

### Generate Command (`generate.js`)

The playlist generation command uses the following workflow:
1. Fetches station information
2. Generates AI playlist suggestions
3. Formats and displays results
4. Provides manual playlist creation instructions

### Schedule Command (`schedule.js`)

Implements two main commands:
1. `analyze`: Provides real-time listener analysis
   - Processes current listener data
   - Analyzes device distribution
   - Maps geographic patterns
   - Calculates connection durations

2. `recommend`: Generates scheduling recommendations
   - Combines listener analysis with AI
   - Provides device-optimized strategies
   - Suggests content scheduling
   - Recommends engagement tactics

### Manage Command (`manage.js`)

Provides station management functionality:
1. List all stations
2. View station details
3. List station playlists

## Data Structures

### Listener Data
```javascript
{
    ip: string,
    user_agent: string,
    connected: string (ISO date),
    location: string,
    mount_name: string
}
```

### Station Analysis
```javascript
{
    station: {
        id: number,
        name: string,
        description: string
    },
    currentStats: {
        total: number,
        unique: number,
        locations: {
            [location: string]: {
                count: number,
                listeners: Array<ListenerInfo>
            }
        },
        devices: {
            counts: {
                mobile: number,
                desktop: number,
                other: number
            },
            distribution: {
                mobile: string,
                desktop: string,
                other: string
            }
        }
    },
    contentInfo: {
        playlistCount: number,
        totalSongs: number
    }
}
```

## API Integration

### AzuraCast API
- Base URL configured in environment variables
- Authentication via API key
- Error handling with detailed messages
- Response data validation and formatting

### OpenAI API
- Uses GPT-4 model
- Structured prompts for consistent results
- Error handling and retry logic
- Response parsing and formatting

## Development Guidelines

### Adding New Commands
1. Create command file in `src/commands/`
2. Implement using Commander.js
3. Add to `src/index.js`
4. Update documentation

### Adding New Services
1. Create service file in `src/services/`
2. Implement as class with clear methods
3. Add error handling
4. Update documentation

### Error Handling
- Use try/catch blocks
- Provide detailed error messages
- Log errors appropriately
- Return meaningful error responses

### Logging
- Use Winston logger
- Log levels: error, warn, info, debug
- Include relevant context
- Structured log format

## Testing

### Manual Testing
1. Test each command with various inputs
2. Verify error handling
3. Check output formatting
4. Validate API interactions

### API Testing
1. Verify endpoint responses
2. Test error conditions
3. Validate data formats
4. Check rate limits

## Debugging

### Common Issues
1. API Connection Issues
   - Check environment variables
   - Verify API key
   - Check network connectivity

2. Data Processing Issues
   - Log data at each step
   - Verify data structures
   - Check parsing logic

3. Command Issues
   - Check parameter parsing
   - Verify error handling
   - Test edge cases

### Logging Levels
- ERROR: Application errors
- WARN: Potential issues
- INFO: Normal operations
- DEBUG: Detailed information

## Performance Considerations

1. API Calls
   - Minimize unnecessary calls
   - Handle rate limits
   - Cache when appropriate

2. Data Processing
   - Optimize large datasets
   - Use efficient algorithms
   - Consider memory usage

3. Response Times
   - Monitor API latency
   - Track processing time
   - Optimize slow operations
