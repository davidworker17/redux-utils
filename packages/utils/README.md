Utils for creating react-redux apps with independent modules where each module gets a part of global state as its store.

## Available Scripts

In the project directory, you can run:

### `yarn test`

Launches the test runner in the interactive watch mode.

### `CI=true yarn test`

Launches the test runner once.

### `yarn run publish`

Builds utils as a node_module to the `lib` folder.

### `yarn publish`

Publishes a module on our private npm registry

##### Versioning:

Given a version number MAJOR.MINOR.PATCH, increment the:

MAJOR version when you make incompatible API changes,
MINOR version when you add functionality in a backwards-compatible manner, and
PATCH version when you make backwards-compatible bug fixes.

Utils is ready to be pushed to the repo and then used as a node dependency in you app!
