#!/usr/bin/env node

const { Command } = require('commander');
const generate = require('./commands/generate');
const manage = require('./commands/manage');
const schedule = require('./commands/schedule');

const program = new Command();

program
    .name('radio')
    .description('AI-powered radio station controller')
    .version('1.0.0');

program.addCommand(generate);
program.addCommand(manage);
program.addCommand(schedule);

program.parse(process.argv);
