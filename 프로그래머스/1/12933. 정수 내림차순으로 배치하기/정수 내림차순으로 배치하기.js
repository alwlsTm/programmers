function solution(n) {
    let num = [...String(n)].sort((a, b) => b - a).map((v) => +v).join('');
    return +num;
}