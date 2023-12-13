const number = {
    "w": 1,
    "s": -1,
    "d": 10,
    "a": -10
}

function solution(n, control) {
    for (let con of control) {
        for (let num in number) {
            if (con === num) n += number[num];
        }
    }
    return n;
}