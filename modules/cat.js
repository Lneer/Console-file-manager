import  {createReadStream} from 'fs';
import * as path from 'path';
export const  cat = async(pathToFile) => {
	let fileContent
	if (path.isAbsolute(pathToFile)){
		 fileContent = createReadStream(pathToFile, 'utf-8');
	} else{
		const currentDir = process.argv[1]; 
		pathToFile = path.join(currentDir, pathToFile)
		fileContent = createReadStream(pathToFile, 'utf-8');
	}
    for await(const chunk of fileContent) {
		process.stdout.write(chunk)
	}
	process.stdout.write('\n')
}