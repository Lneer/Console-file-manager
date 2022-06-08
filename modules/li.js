import * as fs from 'fs/promises';
export const  li = (currDir) =>{
    return (await fs.readdir(currDir))
    }