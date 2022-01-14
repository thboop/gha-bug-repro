const core = require('@actions/core');

try {
  const valueToExport = core.getInput('value');
  console.log(`Exporting ${valueToExport}!`);
  core.exportVariable('VALUE', valueToExport);
} catch (error) {
  core.setFailed(error.message);
}