
import * as Mylib  from './modules/bundle.js';
import {Consolwrite,ArgsJoiner } from './modules/lib/lib.js'
import{init} from './modules/lib/init.js'
import{exit} from './modules/lib/exit.js'
import{invalidInput} from './modules/lib/variable.js'

const readLine = Mylib.createInterface({
    input: process.stdin,
    output: process.stdout
})
let currentDir = Mylib.variable.startDir
process.chdir(currentDir);
init()
Consolwrite();
readLine.on('line', (userCommand) =>{
    let parsedCommand = userCommand.split(' ')
    let instruction = parsedCommand.shift();
    let args = parsedCommand;

    switch (instruction.toLowerCase()) {
        case '..':
        case 'up': 
            Mylib.up();
            Consolwrite();
            break;
        case 'cd':
            args = ArgsJoiner(args);
            Mylib.cd(args)
            .then(()=> Consolwrite());
            break;
        case 'ls':
            Mylib.ls(process.cwd())
            .then(()=> Consolwrite())
            break;
        case 'cat':
            args = ArgsJoiner(args);
            Mylib.cat(args)
            .then(()=> Consolwrite())
            break;
        case 'add':
            args = ArgsJoiner(args);
            Mylib.add(args)
            .then(()=> Consolwrite())
            break;
        case 'rn':
            Mylib.rn(args)
            .then(()=> Consolwrite())
            break;
        case 'cp':
            Mylib.cp(args)
            .then(()=> Consolwrite())
            break;
        case 'mv':
            Mylib.mv(args)
            .then(()=> Consolwrite())
            break;
        case 'rm':
            Mylib.rm(args)
            .then(()=> Consolwrite())
            break;
        case 'os':
            Mylib.os(...args)
            .then(()=> Consolwrite())
            break;
        case 'hash':
            Mylib.hash(args)
            .then(()=> Consolwrite())
            break;
        case 'compress':
            Mylib.compress(args)
            .then(()=> Consolwrite())
            break;
        case 'decompress':
            Mylib.decompress(args)
            .then(()=> Consolwrite())
            break;
        case '.exit':
            exit();

        default : 
        try {
            throw invalidInput
        } catch (error) {
            console.log(invalidInput.message)
        }
        finally {Consolwrite()}
    }
})

readLine.on('SIGINT',() =>{
    console.log();
    exit();
})

