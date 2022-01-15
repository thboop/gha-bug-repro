const core = require('@actions/core');

try {
  console.log(`Exporting 'foo'!`);
  core.exportVariable('VALUE', 'foo');
} catch (error) {
  core.setFailed(error.message);
}