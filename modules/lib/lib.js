import * as path from 'path';
export const Consolwrite = () => {
	
	process.stdout.write('You are currently in ' + process.cwd() +'>')
}

export const PathParser = (pathToParse)=> {
	const currentDir = process.cwd();
	if(!path.isAbsolute(pathToParse)){
		pathToParse = path.join(currentDir,pathToParse)
	}
	return (pathToParse);
} 
export const ArgsJoiner = (args)=> {
	return (args.join(' '));
} 
export const ArgsParser = (args, opt = 'filefile') => {
	const sep = ' '
	let resultArr =[];
	let stringifyArgs =''
	args.forEach((elem) =>{
		elem +=sep;
		stringifyArgs += elem;
		let ParsedArgs = path.parse(stringifyArgs);
		if(ParsedArgs.ext){
			resultArr.push(stringifyArgs.trim());
			stringifyArgs = '';
		}
	})

	if (opt === 'filedir'){
		if (stringifyArgs){
			resultArr.push(stringifyArgs.trim())
		}
		
	}
	return (resultArr);
} 

