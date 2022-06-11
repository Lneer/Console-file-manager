import * as opSys from 'os';
import {faledOperation,invalidInput} from './lib/variable.js'


export const os = async(args) =>{
    try {
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
            throw invalidInput
        }
        
    } catch (error) {
        if (error ===invalidInput ){
            console.log(invalidInput.message)
        }
        else {faledOperation.message}
    }

}