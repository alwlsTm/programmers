function solution(n, t) {
    let germ = n;
    for (let i = 1; i <= t; i++) {
        germ *= 2;
    }
    return germ;
}