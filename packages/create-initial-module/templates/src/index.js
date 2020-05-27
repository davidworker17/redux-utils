import { renderPreview } from '******/utils';
import * as Module from './core';

renderPreview({
  name: '{{moduleName}}',
  path: '/:id',
  viewParams: {},
  ...Module,
})
