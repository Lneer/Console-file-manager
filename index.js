
import * as Mylib  from './modules/bundle.js';

const readLine = Mylib.createInterface({
    input: process.stdin,
    output: process.stdout
})
let currentDir = Mylib.variable.startDir
process.argv[1] = currentDir;
process.stdout.write(currentDir +'>');
readLine.on('line', (userCommand) =>{
    let parsedCommand = userCommand.split(' ')
    let instruction = parsedCommand[0];
    parsedCommand.shift();
    let args = parsedCommand;
    switch (instruction.toLowerCase()) {
        case '..':
        case 'up': 
            currentDir = Mylib.up(currentDir);
            process.argv[1] = currentDir;
            process.stdout.write(currentDir +'>');
            break;
        case 'cd':
            currentDir =  Mylib.cd(currentDir,args);
            process.argv[1] = currentDir;
            process.stdout.write(currentDir +'>');
            break;
        case 'li':
            Mylib.li(currentDir)
            .then(()=> process.stdout.write(currentDir +'>'))
            break;
        case 'cat':
            Mylib.cat(...args)
            .then(()=> process.stdout.write(currentDir +'>'))
            break;
        case 'add':
            Mylib.add(...args)
            .then(()=> process.stdout.write(currentDir +'>'))
            break;
        case 'rn':
            Mylib.rn(...args)
            .then(()=> process.stdout.write(currentDir +'>'))
            break;
        case 'cp':
            Mylib.cp(...args)
            .then(()=> process.stdout.write(currentDir +'>'))
            break;
        case 'mv':
            Mylib.mv(...args)
            .then(()=> process.stdout.write(currentDir +'>'))
            break;
        case 'rm':
            Mylib.rm(...args)
            .then(()=> process.stdout.write(currentDir +'>'))
            break;
        case 'os':
            Mylib.os(...args)
            .then(()=> process.stdout.write(currentDir +'>'))
            break;
        case 'hash':
            Mylib.hash(...args)
            .then(()=> process.stdout.write(currentDir +'>'))
            break;
    }
})
