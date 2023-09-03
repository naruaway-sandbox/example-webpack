import * as zlib from "node:zlib";
import { promisify } from "node:util";

const promisifiedGzip = promisify(zlib.gzip);

export const compressGzip = async (data: string): Promise<Uint8Array> => {
  return await promisifiedGzip(data, {
    level: zlib.constants.Z_BEST_COMPRESSION,
  });
};

const promisifiedBrotli = promisify(zlib.brotliCompress);

export const compressBrotli = async (data: string): Promise<Uint8Array> => {
  return await promisifiedBrotli(data);
};


