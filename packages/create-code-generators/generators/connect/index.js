const pathJoin = require('path').join;

module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'create basic component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Component Name'
    }, {
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
