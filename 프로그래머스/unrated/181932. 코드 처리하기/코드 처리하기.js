function solution(code) {    
    let mode = 0;
    let result = "";
    for (let i = 0; i < code.length; i++) {
        if (code[i] !== "1") {
            if (mode === 0 && i % 2 === 0) result += code[i];
            if (mode === 1 && i % 2 !== 0) result += code[i];
        }
        else {
            mode === 0 ? mode++ : mode--;
        }
    }
    return result ? result : "EMPTY";
}