function solution(n) {
    let result = 0;
    if (n % 2 !== 0) {
        for (let i = 1; i <= n; i+=2) {
            result += i;
        }
    } else {
         for (let j = 2; j <= n; j+=2) {
            result += j ** 2;
        }
    }
    return result;
}