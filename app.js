//Modules

/*const names=require('./names')
console.log(names)
const data=require('./alternative_flavors')
console.log(data)*/

//Built in modules
//packages

const _ =require('lodash')
const items=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)
console.log(newItems)

