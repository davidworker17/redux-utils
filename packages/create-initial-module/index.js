#!/usr/bin/env node
const pathJoin = require("path").join;
const nodePlop = require('node-plop');

const plop = nodePlop(pathJoin(__dirname, "plopConfig.js"));
const moduleGenerator = plop.getGenerator('module');
console.log(__dirname);
async function main() {
  try {
    const prompts = await moduleGenerator.runPrompts();
    const results = await moduleGenerator.runActions(prompts);
    console.log(results);
  } catch (err) {
    console.error(err);
  }
}

main();
