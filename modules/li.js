import  {readdir} from 'fs/promises';
import {faledOperation} from './lib/variable.js'
export const  ls = async(currDir) =>{
    try {
        let fileList = await readdir(currDir);
        fileList.forEach((elem) => {console.log(elem)});
    } catch (error) {
        console.log(faledOperation.message)
    }
   
}