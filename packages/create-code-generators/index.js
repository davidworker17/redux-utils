#!/usr/bin/env node

const pathJoin = require("path").join;

process.argv.push('--plopfile', pathJoin(__dirname, "plopConfig.js"));
require("plop");
