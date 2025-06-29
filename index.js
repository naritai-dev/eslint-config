import prettierConfig from './.prettierrc' assert { type: 'json' };
import vscodeConfig from './.vscode/settings.json' assert { type: 'json' };
import eslintConfig from './eslint.config.js';

export default {
    eslint: eslintConfig,
    prettier: prettierConfig,
    vscode: vscodeConfig,
};
