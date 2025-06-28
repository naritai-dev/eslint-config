const path = require('path');

module.exports = {
    extends: [path.resolve(__dirname, '.eslintrc.json')],
    prettier: require('./.prettierrc'),
    vscode: require('./.vscode/settings.json')
}; 