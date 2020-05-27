const upperFirst = require('lodash/upperFirst');
const pathJoin = require('path').join;

module.exports = function (plop) {
  plop.setGenerator('grid', {
    description: `create grid component`,
    prompts: [{
      type: 'input',
      name: 'path',
      message: 'path to package root directory'
    }, {
      type: 'input',
      name: 'name',
      message: 'request name'
    }],
    actions: data => {
      const action = 'get';
      const capitalizedName = upperFirst(data.name);

      data.requestName = action + capitalizedName;
      data.moduleName = capitalizedName;

      return [{
        type: 'append',
        path: pathJoin(process.cwd(), '{{path}}/src/api', 'index.js'),
        templateFile: pathJoin(__dirname, 'api.js'),
        abortOnFail: false,
      }, {
        type: 'add',
        force: true,
        path: pathJoin(process.cwd(), '{{path}}/src/containers', '{{moduleName}}/index.js'),
        templateFile: pathJoin(__dirname, 'container.js')
      }, {
        type: 'add',
        force: true,
        path: pathJoin(process.cwd(), '{{path}}/src/core', '{{moduleName}}/index.js'),
        templateFile: pathJoin(__dirname, 'store.js'),
      }, {
        type: 'add',
        force: true,
        path: pathJoin(process.cwd(), '{{path}}/src/components', '{{moduleName}}/index.js'),
        templateFile: pathJoin(__dirname, 'component.js'),
      }, {
        type: 'add',
        force: true,
        path: pathJoin(process.cwd(), '{{path}}/src/components', '{{moduleName}}/createGridConfig.js'),
        templateFile: pathJoin(__dirname, 'createGridConfig.js')
      }]
    }
  });
};
