//CommonJS , every file is module (by default)
// Modules - Encapsulted Code (Only share minimum)

const name = require('./4.FirstModules')
const sayHi = require('./5.SecondModule')
// console.log(name)
// const test = require('./6.AlternativeSyntax')
// require('./7.MindGrenade')
sayHi('secret')
sayHi(name.john)
sayHi(name.peter)