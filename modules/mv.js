import {cp} from './cp.js'
import{rm} from './rm.js';
import {ArgsParser} from './lib/lib.js';
import {faledOperation,invalidInput} from './lib/variable.js'

export const mv = async(args) => {
    let pathToSourceFile, pathToDestination;
    try {
        args = ArgsParser(args,'filedir');
        
        if(args.length === 2) {
            [pathToSourceFile,pathToDestination] = args;}
            else{
            throw invalidInput
        };

    await cp([pathToSourceFile,pathToDestination]);
    await rm([pathToSourceFile]);
    } catch(error) {
        if(error === invalidInput){
            console.log(invalidInput.message)
        }
        else console.log(faledOperation.message)
    }
}