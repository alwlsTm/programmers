const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let result = "";
    for(let s of str) {
        s.charCodeAt() >= 97 
            ? result += s.toUpperCase()
            : result += s.toLowerCase()
    }
    console.log(result);
});