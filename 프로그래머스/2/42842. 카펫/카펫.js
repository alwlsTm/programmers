function solution(brown, yellow) {
    let carpet = [];
    let total = brown + yellow
    for (let y = 3; y <= total / y; y++) {
        let x = total / y;
        if ((x - 2) * (y - 2) === yellow) {
            carpet.push(x);
            carpet.push(y);
        }
    }
    return carpet;
}