import  {createReadStream} from 'fs';
import {PathParser} from './lib/lib.js';
import {faledOperation,invalidInput} from './lib/variable.js'
export const  cat = async(pathToFile) => {
    try {
        if(!pathToFile) {
            throw invalidInput;
        }
        pathToFile = PathParser(pathToFile);
        let fileContent = createReadStream(pathToFile);

        for await(const chunk of fileContent) {
            process.stdout.write(chunk);
        }

        process.stdout.write('\n');
        fileContent.close();

    } catch (error) {
        if (error === invalidInput){
            console.log(invalidInput.message);
        }
        else {console.log(faledOperation.message)}
    } 

}