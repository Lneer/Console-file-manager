import * as fs from 'fs';
import * as zlib from 'zlib';
import {faledOperation,invalidInput} from './lib/variable.js'
import {PathParser, ArgsParser} from './lib/lib.js';
import { pipeline } from 'stream/promises';

export const decompress = async (args) => {
    let pathToSourse, destinationFile;
    try {
        args = ArgsParser(args);
        if(args.length === 2) {
            [pathToSourse, destinationFile] = args;
        } else {
            throw invalidInput
        }
        pathToSourse = PathParser(pathToSourse);
        destinationFile = PathParser(destinationFile);
        await fs.promises.access(pathToSourse);

        await pipeline(
            fs.createReadStream(pathToSourse),
            zlib.createBrotliDecompress(),
            fs.createWriteStream(destinationFile)
            )
	   

    } catch(error) {
        if(error === invalidInput){
            console.log(invalidInput.message)
        }
        else console.log(faledOperation.message)
       
    }

    
};