import { compressGzip, compressBrotli } from "./lib/zlib.js";

console.log(await compressGzip("hello"));
console.log(await compressBrotli("hello"));
