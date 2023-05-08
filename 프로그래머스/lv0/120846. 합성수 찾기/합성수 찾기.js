function solution(n) {
    let cnt = 0;
    let result = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) cnt++;
        }
        if (cnt >= 3) result++;
        cnt = 0;
    }
    return result;
}