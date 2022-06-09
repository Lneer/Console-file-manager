import {cp} from './cp.js'
import{rm} from './rm.js';

export const mv = async(pathToSourceFile, pathToDestination) => {
    await cp(pathToSourceFile,pathToDestination);
    await rm(pathToSourceFile);
    
}