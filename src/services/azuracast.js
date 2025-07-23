const axios = require('axios');
require('dotenv').config();

class AzuraCastService {
    constructor() {
        this.baseURL = process.env.AZURACAST_BASE_URL;
        this.apiKey = process.env.AZURACAST_API_KEY;
        this.client = axios.create({
            baseURL: this.baseURL,
            headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
    }

    async getStations() {
        try {
            const response = await this.client.get('/api/stations');
            return response.data;
        } catch (error) {
            const errorMsg = error.response?.data?.message || error.message;
            throw new Error(`Failed to fetch stations: ${errorMsg}`);
        }
    }

    async getStationById(stationId) {
        try {
            const response = await this.client.get(`/api/station/${stationId}`);
            return response.data;
        } catch (error) {
            const errorMsg = error.response?.data?.message || error.message;
            throw new Error(`Failed to fetch station ${stationId}: ${errorMsg}`);
        }
    }

    async getStationListeners(stationId) {
        try {
            // Try the alternative endpoint format
            const response = await this.client.get(`/api/station/${stationId}/listeners`);
            
            // If the response is empty or undefined, try to get at least some basic stats
            if (!response.data || response.data.length === 0) {
                const statsResponse = await this.client.get(`/api/station/${stationId}/listeners/count`);
                const count = statsResponse.data.total || 0;
                
                // Return a simplified listener structure
                return Array(count).fill({
                    ip: 'anonymous',
                    user_agent: 'Unknown',
                    connected: new Date().toISOString(),
                    location: 'Local',
                    mount_name: '/radio.mp3'
                });
            }
            
            return response.data;
        } catch (error) {
            const errorMsg = error.response?.data?.message || error.message;
            throw new Error(`Failed to fetch listeners for station ${stationId}: ${errorMsg}`);
        }
    }

    async getPlaylists(stationId) {
        try {
            const response = await this.client.get(`/api/station/${stationId}/playlists`);
            return response.data;
        } catch (error) {
            const errorMsg = error.response?.data?.message || error.message;
            throw new Error(`Failed to fetch playlists for station ${stationId}: ${errorMsg}`);
        }
    }

    async createPlaylist(stationId, playlistData) {
        try {
            const response = await this.client.post(`/api/station/${stationId}/playlists`, playlistData);
            return response.data;
        } catch (error) {
            const errorMsg = error.response?.data?.message || error.message;
            throw new Error(`Failed to create playlist: ${errorMsg}`);
        }
    }

    async updatePlaylist(stationId, playlistId, playlistData) {
        try {
            const response = await this.client.put(`/api/station/${stationId}/playlists/${playlistId}`, playlistData);
            return response.data;
        } catch (error) {
            const errorMsg = error.response?.data?.message || error.message;
            throw new Error(`Failed to update playlist ${playlistId}: ${errorMsg}`);
        }
    }
}

module.exports = new AzuraCastService();
