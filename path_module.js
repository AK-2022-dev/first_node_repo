//2.path module
const path=require('path')
//to return the current path
console.log(path.sep);
//to join the path 
const filePath=path.join('/content','subfolder','test.txt')
console.log(filePath)
//to see the base or particular file
const base =path.basename(filePath)
console.log(base)
//to return absolute path
const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)