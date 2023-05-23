function solution(sides) {
    let max = Math.max(...sides);
    let sum = sides.reduce((acc, cur) => acc + cur, 0);
    return (sum - max) > max ? 1 : 2;
}