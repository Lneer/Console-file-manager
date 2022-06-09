import * as fs from 'fs';
import * as path from 'path';
import * as zlib from 'zlib';

export const compress = async (pathToSourse, destinationFile) => {
  
	const currentDir = process.argv[1];
    if(!path.isAbsolute(pathToSourse)){
        pathToSourse = path.join(currentDir,pathToSourse);
    }

    const readStream = fs.createReadStream(pathToSourse);
	const brotliStream = zlib.createBrotliCompress();
    const writeStream = fs.createWriteStream(destinationFile);
	readStream.pipe(brotliStream).pipe(writeStream);
};