import  {readdir} from 'fs/promises';
export const  ls = async(currDir) =>{
    let fileList = await readdir(currDir);
    fileList.forEach((elem) => {console.log(elem)});
}