function solution(n) {
    let arr = Array(n).fill(0);
    arr[0] = 1;
    arr[1] = 1;

    for (let i = 2; i <= n; i++) {
        arr[i] = (arr[i - 2] + arr[i - 1]) % 1234567;
    }
    return arr[n];
}