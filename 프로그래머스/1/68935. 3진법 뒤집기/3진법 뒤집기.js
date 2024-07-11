function solution(n) {
    let quo = n;
    let arr = []; 
    while (quo !== 0) {
        arr.push(quo % 3);
        quo = Math.floor(quo / 3);
    }
    return parseInt(arr.join(''), 3);
}