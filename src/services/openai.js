const OpenAI = require('openai');
require('dotenv').config();

class OpenAIService {
    constructor() {
        this.openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });
    }

    async generatePlaylist(stationInfo, count = 10) {
        try {
            const prompt = `Generate a playlist of ${count} songs that would fit well on a radio station with the following details:
            Name: ${stationInfo.name}
            Genre: ${stationInfo.genre}
            Description: ${stationInfo.description}
            
            Format each song as "Artist - Title" and ensure the songs match the station's theme and genre.`;

            const response = await this.openai.chat.completions.create({
                model: 'gpt-4',
                messages: [
                    { role: 'system', content: 'You are a music curator with extensive knowledge of various genres and artists.' },
                    { role: 'user', content: prompt }
                ]
            });

            const suggestions = response.choices[0].message.content
                .split('\n')
                .filter(line => line.trim())
                .map(line => {
                    const match = line.replace(/^\d+\.\s*/, '').match(/(.*?)\s*-\s*["']?(.*?)["']?$/);
                    return match ? {
                        artist: match[1].trim(),
                        title: match[2].trim()
                    } : null;
                })
                .filter(song => song !== null)
                .slice(0, count);

            return suggestions;
        } catch (error) {
            throw new Error(`Failed to generate playlist: ${error.message}`);
        }
    }

    async generateSchedulingAdvice(data) {
        try {
            const prompt = `Analyze this radio station's real-time listener data and generate scheduling recommendations:

Station Info:
Name: ${data.station.name}
Description: ${data.station.description}

Current Listener Stats:
Total Listeners: ${data.listeners.total}
Unique Listeners: ${data.listeners.unique}

Device Distribution:
${Object.entries(data.listeners.devices.distribution).map(([device, percent]) => `${device}: ${percent}`).join('\n')}

Geographic Distribution:
${Object.entries(data.listeners.locations).map(([location, info]) => {
    const listeners = info.listeners.map(l => ({
        connected: new Date(l.connected).toLocaleTimeString(),
        client: l.client
    }));
    return `${location}: ${info.count} listeners\n${listeners.map(l => `- Connected at ${l.connected} using ${l.client}`).join('\n')}`;
}).join('\n\n')}

Content Info:
Number of Playlists: ${data.content.playlistCount}
Total Songs: ${data.content.totalSongs}

Please provide detailed recommendations for:

1. Device-Optimized Content:
   - How to optimize content for the current device distribution
   - Best practices for ${data.listeners.devices.distribution.mobile > data.listeners.devices.distribution.desktop ? 'mobile-first' : 'desktop-first'} audience
   - Content length and format suggestions based on device usage

2. Geographic and Time-Based Strategy:
   - Best times to schedule content based on listener locations
   - How to maintain engagement across different time zones
   - Local event tie-in opportunities

3. Content Scheduling:
   - Optimal content types for current listener patterns
   - Playlist rotation strategies
   - Live vs automated content balance

4. Engagement Optimization:
   - Strategies to increase listener session duration
   - Methods to encourage return listeners
   - Interactive elements to boost engagement

5. Technical Considerations:
   - Stream quality recommendations based on device types
   - Buffer and loading time optimization
   - Device-specific feature recommendations`;

            const response = await this.openai.chat.completions.create({
                model: 'gpt-4',
                messages: [
                    { role: 'system', content: 'You are a radio programming expert with deep knowledge of audience engagement, content scheduling, and technical optimization.' },
                    { role: 'user', content: prompt }
                ]
            });

            return {
                recommendations: response.choices[0].message.content,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            throw new Error(`Failed to generate scheduling advice: ${error.message}`);
        }
    }
}

module.exports = new OpenAIService();
