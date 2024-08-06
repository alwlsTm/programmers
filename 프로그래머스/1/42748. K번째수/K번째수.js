function solution(array, commands) {
    let arr = [];
    for (let i = 0; i < commands.length; i++) {
        let command = commands[i];
        let slc = array.slice(command[0] - 1, command[1]);
        slc.sort((a, b) => a - b);
        arr.push(slc[command[2] - 1]);
    }
    return arr;
}