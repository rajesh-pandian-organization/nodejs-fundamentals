// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');
const sayHiFunction = require('./5-utils');

const name = require('./6-alternative-module');

require('./7-mind-grenade');

sayHiFunction.sayHi('Rajesh');
sayHiFunction.sayHi(names.pandian);
sayHiFunction.sayHi(names.sundara);

console.log(name);