const pathJoin = require('path').join;
const fg = require('fast-glob');

module.exports = function (plop) {
  const templateDir = pathJoin(__dirname, 'templates');
  const packageTemplateDir = pathJoin(__dirname, 'templates/package.example.json');
  const npmignoreTemplateDir = pathJoin(__dirname, 'templates/.npmignoreSample');

console.log(templateDir);


  // controller generator
  plop.setGenerator('module', {
    description: 'application module fundamentals',
    prompts: [{
      type: 'input',
      name: 'moduleName',
      message: 'Module name'
    }],
    actions: [{
      type: 'add',
      path: pathJoin(process.cwd(), '{{moduleName}}/package.json'),
      templateFile: packageTemplateDir
    }, {
      type: 'add',
      path: pathJoin(process.cwd(), '{{moduleName}}/.npmignore'),
      templateFile: npmignoreTemplateDir
    }, {
      type: 'addMany',
      destination: pathJoin(process.cwd(), '{{moduleName}}'),
      templateFiles: [
        templateDir,
        `!${packageTemplateDir}`,
        `!${npmignoreTemplateDir}`,
      ],
      base: templateDir,
      skipIfExists:  true,
      globOptions: {
        ignore: ['package.example.json'],
        dot: true,
      },
    }]
  });
};
