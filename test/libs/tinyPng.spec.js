'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * Created by allen on 2016/11/3.
 */
const fs = require('fs');
const path = require('path');
const tinypng_io_1 = require('../../libs/tinypng-io');
const chai_configuration_1 = require('../chai-configuration');
describe('index', () => {
    describe('upload', () => {
        it('should upload successfully, pass in buffer', () => {
            const targetPath = path.resolve(__dirname, '../img/sample-03.png');
            let imgContent = fs.readFileSync(targetPath);
            return tinypng_io_1.default.upload({ content: imgContent });
        });
        it('should upload successfully, but response invalid data type', done => {
            tinypng_io_1.default
                .upload({ filename: 'test/img/invalid-img.gif' })
                .catch(({ message }) => {
                    chai_configuration_1
                        .expect(message)
                        .to.be.equal(
                            `{"error":"Unsupported media type","message":"File type is not supported"}`,
                        );
                    done();
                });
        });
    });
    describe('download', () => {
        it('should download successfully', () => {
            let downloadUrl = `https://tinypng.com/web/output/75ra4uyqn2x4dwrdxxux3zf9aj9mdnet`;
            return tinypng_io_1.default.download(downloadUrl);
        });
        it('should download error, unknown download url', done => {
            let downloadUrl = `https://tinypng.com/web/output/111111`;
            tinypng_io_1.default.download(downloadUrl).catch(({ message }) => {
                chai_configuration_1
                    .expect(message)
                    .to.be.equal('Request failed with status code 404');
                done();
            });
        });
    });
});
//# sourceMappingURL=tinyPng.spec.js.map
