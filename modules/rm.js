import {isAbsolute,join} from 'path'
import {rm as rem} from 'fs/promises';
import {faledOperation} from './variable.js'

export const rm = async(pathToSourceFile) => {
        const currentDir = process.argv[1];
        try {
            if(!isAbsolute(pathToSourceFile)){
                pathToSourceFile = join(currentDir,pathToSourceFile)
            }
            await rem(pathToSourceFile);
    
        } catch (error) {
            console.error(faledOperation)
        }
    }