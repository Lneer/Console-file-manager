import {access} from 'fs/promises';
import {PathParser} from './lib/lib.js';
import {faledOperation, invalidInput} from './lib/variable.js'
export const  cd = async(destinationPath) => {
    try {
        if(!destinationPath) {
            throw invalidInput
        }
        destinationPath = PathParser(destinationPath)
        await access(destinationPath);
        process.chdir(destinationPath);
    } catch (error) {
        if (error === invalidInput){
            console.log(invalidInput.message);
        }
        else {console.log(faledOperation.message);}
    }
}