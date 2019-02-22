'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const chalk = require('chalk');
const fileSize = require('filesize');
function tinypngLogger(params) {
    const { fileName, beforeSize, afterSize } = params;
    const reducedSize = beforeSize - afterSize;
    const reducedRatio = Math.round((reducedSize / beforeSize) * 100) || 0;
    console.log(
        `${chalk.green('✔ ')} ${fileName} ${chalk.gray(' ->')} before = ${chalk.yellow(
            fileSize(beforeSize),
        )} after = ${chalk.cyan(fileSize(afterSize))} reduced = ${chalk.green.underline(
            fileSize(reducedSize),
        )} (${reducedRatio}%)`,
    );
}
exports.tinypngLogger = tinypngLogger;
function tinypngErrorLogger(params) {
    const { fileName, errorMessage } = params;
    console.log(
        `${chalk.red('✘ ')} ${chalk.red(fileName)} errorMessage = ${chalk.red(errorMessage)}`,
    );
}
exports.tinypngErrorLogger = tinypngErrorLogger;
//# sourceMappingURL=cli.js.map
