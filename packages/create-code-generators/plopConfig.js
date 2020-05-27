const componentGenerator = require('./generators/component');
const connectGenerator = require('./generators/connect');
const apiRequestGenerator = require('./generators/apiRequest');
const gridGenerator = require('./generators/grid');

const pathJoin = require('path').join;

module.exports = function (plop) {
  const templateDir = pathJoin(__dirname, 'generators');

  componentGenerator(plop);
  connectGenerator(plop);
  apiRequestGenerator(plop);
  gridGenerator(plop);
};
