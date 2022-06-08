import {join} from 'path';
export const up =(currentPath)=> {
    currentPath = join(currentPath,'../')
    return currentPath
} 