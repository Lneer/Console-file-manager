import * as opSys from 'os';
export const os = async(args) =>{
switch (args){
    case '--EOL':
        console.log(opSys.EOL);
        break;
    case '--cpus':
        console.log(opSys.cpus());
        break;
    case '--homedir':
        console.log(opSys.homedir());
        break;
    case '--username':
        console.log(opSys.userInfo().username);
        break;
    case '--architecture':
        console.log(opSys.arch());
        break;
    default : 
    console.log('command not found')
}
}