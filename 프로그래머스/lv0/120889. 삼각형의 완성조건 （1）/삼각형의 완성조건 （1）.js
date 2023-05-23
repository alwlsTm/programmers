function solution(sides) {
    let max = Math.max(...sides);
    let sum = sides.reduce((acc, cur) => acc + cur, 0) - max;
    return sum > max ? 1 : 2;
}