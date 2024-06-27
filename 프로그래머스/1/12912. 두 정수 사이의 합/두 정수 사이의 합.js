function solution(a, b) {
    let result = 0;
    let num = [a, b].sort((a, b) => a - b);
    for (let i = num[0]; i <= num[1]; i++) {
        result += i;
    }
    return result;
}