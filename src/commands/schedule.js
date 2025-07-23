const { Command } = require('commander');
const schedule = require('../services/schedule');
const logger = require('../utils/logger');

const scheduleCmd = new Command('schedule');

// Helper function to format connection time
function formatConnectionTime(connected) {
    if (!connected) return 'Unknown';
    const connectedTime = new Date(connected);
    const now = new Date();
    const diffMinutes = Math.abs(Math.round((now - connectedTime) / 1000 / 60));
    
    if (diffMinutes < 60) {
        return `${diffMinutes} minutes`;
    } else {
        const hours = Math.floor(diffMinutes / 60);
        const minutes = diffMinutes % 60;
        return `${hours} hour${hours !== 1 ? 's' : ''} ${minutes} minute${minutes !== 1 ? 's' : ''}`;
    }
}

// Helper function to format time
function formatTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'America/Los_Angeles'
    });
}

scheduleCmd
    .command('analyze')
    .description('Analyze listener patterns for a station')
    .requiredOption('-s, --station <id>', 'Station ID')
    .action(async (options) => {
        try {
            logger.info('Analyzing listener patterns...', { stationId: options.station });
            
            const analysis = await schedule.analyzeListenerPatterns(options.station);

            console.log('\nListener Analysis Report');
            console.log('='.repeat(50));
            
            console.log('\nStation Information:');
            console.log(`Name: ${analysis.station.name}`);
            console.log(`Description: ${analysis.station.description}`);

            console.log('\nCurrent Listener Stats:');
            console.log(`Total Listeners: ${analysis.currentStats.total}`);
            console.log(`Unique Listeners: ${analysis.currentStats.unique}`);

            console.log('\nDevice Distribution:');
            console.log(`Desktop: ${analysis.currentStats.devices.distribution.desktop}`);
            console.log(`Mobile: ${analysis.currentStats.devices.distribution.mobile}`);
            console.log(`Other: ${analysis.currentStats.devices.distribution.other}`);

            console.log('\nGeographic Distribution:');
            for (const [location, data] of Object.entries(analysis.currentStats.locations)) {
                console.log(`\n${location}: ${data.count} listener${data.count !== 1 ? 's' : ''}`);
                data.listeners.forEach((listener, index) => {
                    console.log(`  Listener ${index + 1}:`);
                    console.log(`    Connected at: ${formatTime(listener.connected)} PDT`);
                    console.log(`    Duration: ${formatConnectionTime(listener.connected)}`);
                    console.log(`    Device: ${listener.client.includes('Mobile') ? 'Mobile' : 'Desktop'}`);
                    console.log(`    Stream: ${listener.stream}`);
                });
            }

            console.log('\nContent Information:');
            console.log(`Total Playlists: ${analysis.contentInfo.playlistCount}`);
            console.log(`Total Songs: ${analysis.contentInfo.totalSongs}`);

        } catch (error) {
            logger.error('Failed to analyze listener patterns', { error: error.message });
            console.error('Error:', error.message);
            process.exit(1);
        }
    });

scheduleCmd
    .command('recommend')
    .description('Get AI-powered scheduling recommendations')
    .requiredOption('-s, --station <id>', 'Station ID')
    .action(async (options) => {
        try {
            logger.info('Generating scheduling recommendations...', { stationId: options.station });
            
            const result = await schedule.generateScheduleRecommendations(options.station);

            console.log('\nScheduling Recommendations');
            console.log('='.repeat(50));
            
            console.log('\nStation Information:');
            console.log(`Name: ${result.analysis.station.name}`);
            console.log(`Description: ${result.analysis.station.description}`);

            console.log('\nCurrent Listener Stats:');
            console.log(`Total Listeners: ${result.analysis.currentStats.total}`);
            console.log(`Unique Listeners: ${result.analysis.currentStats.unique}`);

            console.log('\nDevice Distribution:');
            console.log(`Desktop: ${result.analysis.currentStats.devices.distribution.desktop}`);
            console.log(`Mobile: ${result.analysis.currentStats.devices.distribution.mobile}`);
            console.log(`Other: ${result.analysis.currentStats.devices.distribution.other}`);

            console.log('\nAI Recommendations:');
            console.log('-'.repeat(30));
            console.log(result.recommendations.recommendations);

            console.log('\nNote: These recommendations are based on current listener patterns and station content.');
            console.log('Consider testing different schedules and monitoring engagement metrics.');

        } catch (error) {
            logger.error('Failed to generate recommendations', { error: error.message });
            console.error('Error:', error.message);
            process.exit(1);
        }
    });

module.exports = scheduleCmd;
