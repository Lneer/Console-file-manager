import {createReadStream, createWriteStream, promises} from 'fs';
import * as path from 'path'
import {faledOperation} from './variable.js'


export const cp = async(pathToSourceFile, pathToDestination) => {
    const currentDir = process.argv[1];
    const fileName = path.parse(pathToSourceFile).base;
    try {
        if(!path.isAbsolute(pathToSourceFile)){
            pathToSourceFile = path.join(currentDir,pathToSourceFile)
        }
    
        if(!path.isAbsolute(pathToDestination)){
            pathToDestination = path.join(currentDir,pathToDestination)
        }
    
        await promises.mkdir(pathToDestination,{recursive:true});
        const pathToNewFile = path.join(pathToDestination,fileName);

        await promises.access(pathToSourceFile);
        const readStream =  createReadStream(pathToSourceFile);
        const writeStream = createWriteStream(pathToNewFile);
        for await(let chunk of readStream){
            writeStream.write(chunk)
        }
        readStream.close();
        writeStream.close();
    } 
    catch (error) {
        if(error){
            console.error(faledOperation)
        }
    }
    
}