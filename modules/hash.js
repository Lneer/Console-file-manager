import * as crypto from 'crypto';
import * as fs from 'fs';
import {faledOperation,invalidInput} from './lib/variable.js'
import {PathParser, ArgsParser} from './lib/lib.js';



export const hash = async (args) => {
    let pathToFile;
    try {
        args = ArgsParser(args);
        if(args.length === 1) {
            [pathToFile] = args;
        } else {
            throw invalidInput
        }
        pathToFile = PathParser(pathToFile);
        await fs.promises.access(pathToFile);
        const readStream = fs.createReadStream(pathToFile);
        const cryptohash = crypto.createHash('sha256')
        let data;
        for await (let chunk of readStream){
            data = cryptohash.update(chunk).digest('hex')
        }
        console.log (data)

    } catch (error) {
        if (error ===invalidInput ){
            console.log(invalidInput.message)
        }
        else {console.log(faledOperation.message)}
    }
  
    
};