import {createReadStream, createWriteStream, promises} from 'fs';
import {parse,join} from 'path'
import {faledOperation, invalidInput} from './lib/variable.js'
import {PathParser,ArgsParser} from './lib/lib.js';

export const cp = async(args) => {
   let pathToSourceFile,pathToDestination;
    try {
        args = ArgsParser(args,'filedir');
        
        if(args.length !== 2) {throw invalidInput};
        
        [pathToSourceFile,pathToDestination] = args;

        if (pathToSourceFile === pathToDestination ) {
            throw invalidInput;
        }
        
        const fileName = parse(pathToSourceFile).base;
        pathToSourceFile = PathParser(pathToSourceFile);
        pathToDestination = PathParser(pathToDestination);
        await promises.access(pathToSourceFile);
    
        await promises.mkdir(pathToDestination,{recursive:true});
        const pathToNewFile = join(pathToDestination,fileName);

        const readStream = createReadStream(pathToSourceFile);
        const writeStream = createWriteStream(pathToNewFile);

        writeStream.on('error', (err) => {
           throw invalidInput;
        })
        writeStream.on('error', (err) => {
            throw invalidInput;
        })

        for await(let chunk of readStream){
            writeStream.write(chunk)
        }
        readStream.close();
        writeStream.close();
    } 
    catch (error) {
        if(error === invalidInput){
            console.log(invalidInput.message)
        }
        else console.log(faledOperation.message)
    }
    
}