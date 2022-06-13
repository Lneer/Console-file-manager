import * as path from 'path'
let a = process.argv
let b = `${process.env.HOMEDRIVE}${process.env.HOMEPATH}`

//process.chdir(b)
// let c = process.cwd()
// console.log(a);
// console.log(c);


b = 'C:\\Users\\XE\\test\\2.txt'
console.log(path.parse(b))



