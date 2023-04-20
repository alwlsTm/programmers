function solution(n) {
    let num = 0;
    for (let i = 0; i <= n; i+=2) {
        num += i;
    }
    return num;
}