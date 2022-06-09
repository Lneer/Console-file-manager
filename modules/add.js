import {open} from 'fs/promises'
import * as path from 'path'
import {faledOperation} from './variable.js'

export const add = async(fileName) => {
    const currentDir = process.argv[1];
    const filePath = path.join(currentDir,fileName);
    try {
        await open(filePath, 'wx');
    } 
    catch (error) {
        if(error.code === 'EEXIST'){
            console.error(faledOperation)
        }
        
    }
    
}