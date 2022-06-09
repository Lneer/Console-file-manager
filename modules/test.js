import * as path from 'path'
let a = process.argv
a[1] = `${process.env.HOMEDRIVE}${process.env.HOMEPATH}`
let b = '..\\1.txt'
let parsedB = path.parse(b);
console.log(parsedB);

