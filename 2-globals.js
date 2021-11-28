// GLOBALS - NO WINDOW !!!!

// __dirname - path to the current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

//console.log(process);
console.log(__dirname);
console.log(__filename);

setInterval(() => {
    console.log('Hello Rajesh!');
}, 1000)