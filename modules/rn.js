import {rename} from 'fs/promises'
import {join,parse} from 'path'
import {faledOperation,invalidInput} from './lib/variable.js'
import {PathParser, ArgsParser} from './lib/lib.js';

export const rn = async(args) => {
    let pathToSourceFile, newFilename; 
    args = ArgsParser(args);
    try {
        if (args.length !== 2) {
            throw invalidInput;
        } 
        [pathToSourceFile,newFilename] = args; 
        pathToSourceFile = PathParser(pathToSourceFile);
        const  parsedPath = parse(pathToSourceFile)
        const pathToNewFile = join(parsedPath.dir, newFilename); 
    
        await rename(pathToSourceFile,pathToNewFile);
    } 
    catch (error) {
        if (error === invalidInput){
            console.log(invalidInput.message);
        }
        else {console.log(faledOperation.message)}
    }
    
}