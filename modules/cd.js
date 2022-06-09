import * as path from 'path';
export const  cd = (currDir, dir) =>{
const sep = path.sep; 

if (path.isAbsolute(dir)){
    //Check is so path?
    return dir
} else{
    let parsedPath =  dir.split(sep);
    return (path.join(currDir, ...parsedPath))
}
}