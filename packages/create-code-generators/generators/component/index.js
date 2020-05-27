const pathJoin = require('path').join;

module.exports = function (plop) {
  plop.setGenerator('connect', {
    description: 'create basic connect',
    prompts: [{
      type: 'input',
      name: 'path',
      message: 'Component Path'
    }],
    actions: [{
      type: 'add',
      path: pathJoin('{{path}}', 'index.js'),
      templateFile: pathJoin(__dirname, 'template.js')
    }]
  });
};
