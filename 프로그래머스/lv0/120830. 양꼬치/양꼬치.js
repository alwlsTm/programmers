function solution(n, k) {
    let free = parseInt(n / 10);
    let result = n * 12000 + k * 2000 - (free * 2000);
    return result;
}