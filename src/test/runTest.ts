// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {runTests} from 'vscode-test';
import * as path from 'path';

async function main() {
  try {
    // The folder containing the Extension Manifest package.json
    // Passed to `--extensionDevelopmentPath`
    const extensionDevelopmentPath = path.resolve(__dirname, '..' + path.sep + '..' + path.sep);

    // The path to the extension test script
    // Passed to --extensionTestsPath
    const extensionTestsPath = path.resolve(__dirname, '.' + path.sep + 'testRunner');

    // Download VS Code, unzip it and run the integration test
    await runTests({extensionDevelopmentPath, extensionTestsPath, launchArgs: ['--disable-extensions']});
  } catch (err) {
    console.error('Failed to run tests');
    process.exit(1);
  }
}

main();
