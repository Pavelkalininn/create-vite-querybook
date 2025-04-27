#!/usr/bin/env node

import { program } from 'commander';
import generator from '../lib/generator.js';
import { readFile } from 'fs/promises';


const pkg = JSON.parse(await readFile(new URL('../package.json', import.meta.url)));

program
    .version(pkg.version)
    .arguments('<project-directory>')
    .option('-t, --template <template-name>', 'Template choosing (basic|mobx)', 'basic')
    .action((dir, options) => {
        generator(dir, options.template);
    })
    .parse(process.argv);