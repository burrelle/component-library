import { configure, addDecorator } from '@storybook/react';
import { withDocs } from 'storybook-readme';

addDecorator((story, context) => {
  const componentPath = context.kind.replace(' - ', '/');
  const readme = require(`../src/${componentPath}/README.md`);
  return withDocs(readme)(story, context);
});

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
