function solution(n) {
    let num = 1
    for (let i = 1; i <= 10; i++) {
        num *= i;
        
        if (num === n) return i;
        if (num > n) return i - 1;
    }
}