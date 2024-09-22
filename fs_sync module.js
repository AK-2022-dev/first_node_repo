//3.FS module
const{ readFileSync,writeFileSync}=require('fs')

//reading from a file
const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')
console.log(first,second)
//writing to a file(by creating or in a exsisting file)
data="This is a tempelate"
writeFileSync('first.txt',data);
