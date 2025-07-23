const { Command } = require('commander');
const azuracast = require('../services/azuracast');
const playlist = require('../services/playlist');
const logger = require('../utils/logger');

const manage = new Command('manage');

manage
    .command('stations')
    .description('List all available stations')
    .action(async () => {
        try {
            logger.info('Fetching stations...');
            const stations = await azuracast.getStations();

            console.log('\nAvailable Stations:');
            console.log('==================');
            stations.forEach(station => {
                console.log(`\nID: ${station.id}`);
                console.log(`Name: ${station.name}`);
                console.log(`Genre: ${station.genre || 'Not specified'}`);
                console.log(`Description: ${station.description || 'No description'}`);
                console.log('------------------');
            });

        } catch (error) {
            logger.error('Failed to fetch stations', { error: error.message });
            console.error('Error:', error.message);
            process.exit(1);
        }
    });

manage
    .command('playlists')
    .description('List all playlists for a station')
    .requiredOption('-s, --station <id>', 'Station ID')
    .action(async (options) => {
        try {
            logger.info('Fetching playlists...', { stationId: options.station });
            const playlists = await playlist.listStationPlaylists(options.station);

            console.log('\nStation Playlists:');
            console.log('=================');
            playlists.forEach(playlist => {
                console.log(`\nID: ${playlist.id}`);
                console.log(`Name: ${playlist.name}`);
                console.log(`Songs: ${playlist.songCount}`);
                console.log(`Status: ${playlist.isEnabled ? 'Enabled' : 'Disabled'}`);
                console.log(`Automation: ${playlist.includeInAutomation ? 'Included' : 'Excluded'}`);
                console.log('------------------');
            });

        } catch (error) {
            logger.error('Failed to fetch playlists', { error: error.message });
            console.error('Error:', error.message);
            process.exit(1);
        }
    });

manage
    .command('station')
    .description('Get detailed information about a station')
    .requiredOption('-s, --station <id>', 'Station ID')
    .action(async (options) => {
        try {
            logger.info('Fetching station details...', { stationId: options.station });
            const station = await azuracast.getStationById(options.station);

            console.log('\nStation Details:');
            console.log('===============');
            console.log(`ID: ${station.id}`);
            console.log(`Name: ${station.name}`);
            console.log(`Genre: ${station.genre || 'Not specified'}`);
            console.log(`Description: ${station.description || 'No description'}`);
            console.log(`URL: ${station.url || 'Not available'}`);
            console.log(`Status: ${station.is_enabled ? 'Enabled' : 'Disabled'}`);

        } catch (error) {
            logger.error('Failed to fetch station details', { error: error.message });
            console.error('Error:', error.message);
            process.exit(1);
        }
    });

module.exports = manage;
