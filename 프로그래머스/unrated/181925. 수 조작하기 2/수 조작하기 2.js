const num = {
    "w": 1,
    "s": -1,
    "d": 10,
    "a": -10
}

function solution(numLog) {
    let str = "";
    for (let i = 0; i < numLog.length; i++) {
        for (let n in num) {
            if (numLog[i] + num[n] === numLog[i + 1]) str += n;
        }
    }
    return str;
}