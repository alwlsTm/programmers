function solution(x, n) {
    let arr = Array(n).fill(0);
    return arr.map((v, i) => (i + 1) * x);
}