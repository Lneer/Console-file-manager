import {rename} from 'fs/promises'
import * as path from 'path'
import {faledOperation} from './variable.js'

export const rn = async(pathToSourceFile, newFilename) => {
    const currentDir = process.argv[1];
    let pathToNewFile = newFilename;

    if (!path.isAbsolute(pathToSourceFile)){
        pathToSourceFile = path.join(currentDir,pathToSourceFile);
        pathToNewFile = path.join(currentDir,newFilename);  
    } else {
        let parsedPath = path.parse(pathToSourceFile)
        pathToNewFile = path.join(parsedPath.dir, newFilename); 
    }
    
    try {
        await rename(pathToSourceFile,pathToNewFile);
    } 
    catch (error) {
        if(error){
            console.error(faledOperation)
        }
    }
    
}