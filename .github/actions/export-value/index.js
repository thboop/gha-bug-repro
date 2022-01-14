const core = require('@actions/core');
const github = require('@actions/github');

try {
  const valueToExport = core.getInput('value');
  console.log(`Exporting ${valueToExport}!`);
  core.exportVariable('VALUE', valueToExport);
} catch (error) {
  core.setFailed(error.message);
}