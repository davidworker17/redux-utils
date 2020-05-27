const upperFirst = require('lodash/upperFirst');
const pathJoin = require('path').join;

const methods = {
  'post': 'add',
  'put': 'update',
  'patch': 'update',
  'delete': 'remove',
  'get': 'get',
}

module.exports = function (plop) {
  plop.setGenerator('apiRequest', {
    description: 'create api request',
    prompts: [{
      type: 'input',
      name: 'path',
      message: 'path to package root directory'
    }, {
      type: 'input',
      name: 'name',
      message: 'request name'
    }, {
      type: 'input',
      name: 'endpoint',
      message: 'endpoint',
    }, {
      type: 'input',
      name: 'method',
      message: 'method',
      default: 'post',
    }],
    actions: data => {
      const action = methods[data.method];
      const capitalizedName = upperFirst(data.name);
      const capitlizedAction = upperFirst(action);

      data.action = action;
      data.requestName = action + capitalizedName;
      data.moduleName = action === 'get'
        ? capitalizedName
        : capitlizedAction + capitalizedName;

      return [{
        type: 'append',
        path: pathJoin(process.cwd(), '{{path}}/src/api', 'index.js'),
        templateFile: data.method === 'get'
          ? pathJoin(__dirname, 'gql.js')
          : pathJoin(__dirname, 'api.js'),
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
      }]
    }
  });
};
