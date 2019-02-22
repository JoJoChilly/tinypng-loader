/**
 * Created by allen on 2016/11/3.
 */
import * as fs from 'fs';
import * as path from 'path';
import tinyPng from '../../libs/tinypng-io';
import { expect } from '../chai-configuration';

describe('index', () => {
    describe('upload', () => {
        it('should upload successfully, pass in buffer', () => {
            const targetPath = path.resolve(__dirname, '../img/sample-03.png');
            let imgContent = fs.readFileSync(targetPath);
            return tinyPng.upload({ content: imgContent });
        });
        it('should upload successfully, but response invalid data type', done => {
            tinyPng.upload({ filename: 'test/img/invalid-img.gif' }).catch(({ message }) => {
                expect(message).to.be.equal(
                    `{"error":"Unsupported media type","message":"File type is not supported"}`,
                );
                done();
            });
        });
    });
    describe('download', () => {
        it('should download successfully', () => {
            let downloadUrl = `https://tinypng.com/web/output/75ra4uyqn2x4dwrdxxux3zf9aj9mdnet`;
            return tinyPng.download(downloadUrl);
        });
        it('should download error, unknown download url', done => {
            let downloadUrl = `https://tinypng.com/web/output/111111`;
            tinyPng.download(downloadUrl).catch(({ message }) => {
                expect(message).to.be.equal('Request failed with status code 404');
                done();
            });
        });
    });
});
