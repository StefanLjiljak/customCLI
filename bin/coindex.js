#!/usr/bin/env node
const program = require('commander');
// import version from package.json
const pkg = require('../package.json');

program
    .version(pkg.version)
    .command('key', 'Manage API Key -- https://nomics.com')
    .command('check', 'Check Coin Price Info')
    .parse(process.argv);

