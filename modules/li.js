import  {readdir} from 'fs/promises';
export const  li = async(currDir) =>{

    let fileList = await readdir(currDir);
    fileList.forEach((elem) => {console.log(elem)});
}