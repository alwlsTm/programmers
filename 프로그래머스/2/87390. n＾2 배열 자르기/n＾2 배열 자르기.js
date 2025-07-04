function solution(n, left, right) {
    let arr = [];
    for (let i = left; i <= right; i++) {
        let row = Math.floor(i / n);
        let col = i % n;
        arr.push(Math.max(row, col) +  1);
    }
    return arr;
}