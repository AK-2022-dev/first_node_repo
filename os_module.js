//1.OS module
const os=require('os')
//info about current user
const user=os.userInfo()
console.log(user)
//method to return the system uptime in seconds
console.log(`The system uptime is :${os.uptime()} seconds`);
//other imp methods
const currentos={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentos);