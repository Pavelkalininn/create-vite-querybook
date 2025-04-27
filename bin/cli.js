#!/usr/bin/env node

const { program } = require('commander');
const generator = require('../lib/generator');
const pkg = require('../package.json');

program
    .version(pkg.version)
    .arguments('<project-directory>')
    .option('-t, --template <template-name>', 'Template choosing (basic|mobx)', 'basic')
    .action((dir, options) => {
        generator(dir, options.template);
    })
    .parse(process.argv);