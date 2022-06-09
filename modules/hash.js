import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';


export const hash = async (pathToFile) => {
    const currentDir = process.argv[1];
    if(!path.isAbsolute(pathToFile)){
        pathToFile = path.join(currentDir,pathToFile);
    }
    const readStream = fs.createReadStream(pathToFile);
    const cryptohash = crypto.createHash('sha256')
    let data;
    for await (let chunk of readStream){
        data = cryptohash.update(chunk).digest('hex')
    }
    console.log (data)
};