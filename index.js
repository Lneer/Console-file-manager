
import * as Mylib  from './modules/bundle.js';

const readLine = Mylib.createInterface({
    input: process.stdin,
    output: process.stdout
})
// const startDir = `${process.env.HOMEDRIVE}${process.env.HOMEPATH}`;
let currentDir = Mylib.variable.startDir
process.stdout.write(currentDir +'>');
readLine.on('line', (userCommand) =>{
    let parsedCommand = userCommand.split(' ')
    let instruction = parsedCommand[0];
    let args = parsedCommand[1];
    switch (instruction.toLowerCase()) {
        case '..':
        case 'up': 
            currentDir = Mylib.up(currentDir);
            process.stdout.write(currentDir +'>');
            break;
        case 'cd':
            currentDir =  Mylib.cd(currentDir,args);
            process.stdout.write(currentDir +'>');
            break;
        case 'li':
            let listFile = li(currentDir);
            console.log(listFile);
            process.stdout.write(currentDir +'>');
            break;
        
    }
})
