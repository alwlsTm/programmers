function solution(n) {
    let cnt = 0;
    let sum = 0;
    let num = 1;
    for (let i = 1; num <= n; i++) {
        sum += i;
        if (sum === n) {
            cnt++;
            sum = 0;
            i = num++;
            continue;
        }
        if (sum > n) {
            i = num++;
            sum = 0;
            continue;
        }
    }
    return cnt;
}