import * as chalk from 'chalk';
import * as fileSize from 'filesize';

interface ITinypngLoggerParams {
    fileName: string;
    beforeSize: number;
    afterSize: number;
}

interface ITinypngErrorLoggerParams {
    fileName: string;
    errorMessage: string;
}

export function tinypngLogger(params: ITinypngLoggerParams) {
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

export function tinypngErrorLogger(params: ITinypngErrorLoggerParams) {
    const { fileName, errorMessage } = params;
    console.log(
        `${chalk.red('✘ ')} ${chalk.red(fileName)} errorMessage = ${chalk.red(errorMessage)}`,
    );
}
