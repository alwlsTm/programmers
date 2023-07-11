function solution(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result++;
        while (result.toString().includes('3') || result % 3 === 0)  {
            result++;
        }
    }
    return result;
}