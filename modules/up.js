import {join} from 'path';
export const up =()=> {
    let currentPath = process.cwd();
    currentPath = join(currentPath,'../')
    process.chdir(currentPath)
} 