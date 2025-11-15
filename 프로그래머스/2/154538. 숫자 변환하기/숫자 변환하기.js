function solution(x, y, n) {
    let arr = new Array(y + 1).fill(Infinity);
    arr[x] = 0;
    for (let i = x; i <= y; i++) {
        arr[i + n] = Math.min(arr[i + n], arr[i] + 1);
        arr[i * 2] = Math.min(arr[i * 2], arr[i] + 1);
        arr[i * 3] = Math.min(arr[i * 3], arr[i] + 1);
    }
    return arr[y] !== Infinity ? arr[y] : -1;
}