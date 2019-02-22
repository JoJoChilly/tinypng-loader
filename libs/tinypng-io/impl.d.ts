import { ITinyPngIO, IUploadParams, IUploadResponse } from './interface';
export default class TinyPngIOImpl implements ITinyPngIO {
    upload({content, filename}: IUploadParams): Promise<IUploadResponse>;
    private static requestForShrink(requestData);
    private static contentReader({content, filename});
    private static validateUploadResponseData(data);
    download(url: string): Promise<Buffer>;
}
