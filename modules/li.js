import  {readdir} from 'fs/promises';
import {faledOperation} from './lib/variable.js'
export const  ls = async(currDir) =>{
    try {
        const resList = await readdir(currDir,{withFileTypes:true});
        const fileList = resList.map((elem) => ({name: elem.name, type: elem.isDirectory() === true ? 'Directory' : 'File'}))
        fileList.sort((a,b) => {
            if(a.type  === b.type) {
                return a.name > b.name ? 1 : -1
            } else {
                return a.type > b.type ? 1 : -1
            }
        })
        console.table(fileList);
    } catch (error) {
        console.log(faledOperation.message)
    }
   
}