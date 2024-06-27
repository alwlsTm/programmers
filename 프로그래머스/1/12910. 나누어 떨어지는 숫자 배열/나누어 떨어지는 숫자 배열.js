function solution(arr, divisor) {
    let array = arr.filter((v) => v % divisor === 0).sort((a, b) => a - b);
    return array.length ? array : [-1];
}