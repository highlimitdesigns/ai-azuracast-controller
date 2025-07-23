const azuracast = require('./azuracast');
const openai = require('./openai');
const logger = require('../utils/logger');

class PlaylistService {
    async generatePlaylistForStation(stationId, count = 10) {
        try {
            // Get all stations and find the one we want
            const stations = await azuracast.getStations();
            const station = stations.find(s => s.id === parseInt(stationId));
            
            if (!station) {
                throw new Error(`Station with ID ${stationId} not found`);
            }

            logger.info('Generating AI playlist suggestions...', {
                stationName: station.name,
                genre: station.genre || 'Various',
                description: station.description
            });

            // Generate playlist using AI
            const songs = await openai.generatePlaylist({
                name: station.name,
                genre: station.genre || 'Various',
                description: station.description || ''
            }, count);

            // Return the suggestions without creating a playlist
            return {
                suggestions: songs,
                stationName: station.name,
                stationInfo: {
                    id: station.id,
                    name: station.name,
                    genre: station.genre || 'Various',
                    description: station.description || ''
                }
            };
        } catch (error) {
            throw new Error(`Failed to generate playlist suggestions: ${error.message}`);
        }
    }

    async listStationPlaylists(stationId) {
        try {
            const playlists = await azuracast.getPlaylists(stationId);
            return playlists.map(playlist => ({
                id: playlist.id,
                name: playlist.name,
                songCount: playlist.songs ? playlist.songs.length : 0,
                isEnabled: playlist.is_enabled,
                includeInAutomation: playlist.include_in_automation
            }));
        } catch (error) {
            throw new Error(`Failed to list playlists: ${error.message}`);
        }
    }
}

module.exports = new PlaylistService();
