function solution(sides) {
    let result = 0;
    let max = Math.max(...sides);
    let min = Math.min(...sides);
    for (i = max-min+1; i <= max ; i++) {
        result++;
    }
    for (j = max + 1; j < max + min; j++) {
        result++
    }
    return result;
}