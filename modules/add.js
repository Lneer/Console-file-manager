import {open} from 'fs/promises'
import {join}  from 'path'
import {faledOperation,invalidInput} from './lib/variable.js'

export const add = async(fileName) => {
    try {
        if(!fileName) {
            throw invalidInput;
        }
        const filePath = join(process.cwd(),fileName);
        let newfile = await open(filePath, 'wx');
        newfile.close();
    } 
    catch (error) {
        if (error === invalidInput){
            console.log(invalidInput.message);
        }
        else {console.log(faledOperation.message)}
    }
    
}