const { Command } = require('commander');
const playlist = require('../services/playlist');
const logger = require('../utils/logger');

const generate = new Command('generate');

generate
    .command('playlist')
    .description('Generate AI-powered playlist suggestions for a station')
    .requiredOption('-s, --station <id>', 'Station ID')
    .option('-c, --count <number>', 'Number of songs to generate', '10')
    .action(async (options) => {
        try {
            logger.info('Generating playlist suggestions...', { stationId: options.station, count: options.count });
            
            const result = await playlist.generatePlaylistForStation(
                options.station,
                parseInt(options.count)
            );

            logger.info('Suggestions generated successfully', {
                stationName: result.stationName,
                songCount: result.suggestions.length
            });

            console.log('\nAI-Generated Playlist Suggestions for', result.stationName);
            console.log('='.repeat(50));
            console.log('\nStation Information:');
            console.log(`Name: ${result.stationInfo.name}`);
            console.log(`Genre: ${result.stationInfo.genre}`);
            console.log(`Description: ${result.stationInfo.description}`);
            
            console.log('\nSuggested Songs:');
            console.log('-'.repeat(30));
            result.suggestions.forEach((song, index) => {
                // Clean up any numbering that might be in the artist name
                const artist = song.artist.replace(/^\d+\.\s*/, '').trim();
                console.log(`${index + 1}. ${artist} - ${song.title}`);
            });

            console.log('\nInstructions:');
            console.log('1. Log in to your AzuraCast dashboard');
            console.log(`2. Navigate to station "${result.stationName}"`);
            console.log('3. Go to "Music Files" or "Playlists" section');
            console.log('4. Create a new playlist and add these songs');
            console.log('\nNote: Due to API limitations, songs must be added manually through the AzuraCast interface.');

        } catch (error) {
            logger.error('Failed to generate playlist suggestions', { error: error.message });
            console.error('Error:', error.message);
            process.exit(1);
        }
    });

module.exports = generate;
