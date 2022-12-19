import {rm as rem} from 'fs/promises';
import {faledOperation,invalidInput} from './lib/variable.js'
import {PathParser, ArgsParser} from './lib/lib.js';

export const rm = async(args) => {
        let pathToSourceFile;
        try {
            args = ArgsParser(args,'filedir');

            if(args.length === 1) {
                [pathToSourceFile] = args;
            } else {
                throw invalidInput; 
            }
            
            pathToSourceFile = PathParser(pathToSourceFile)
            await rem(pathToSourceFile);
    
        } catch (error) {
            if (error ===invalidInput ){
                console.log(invalidInput.message)
            }
            else {console.log(faledOperation.message)}
        }
    }