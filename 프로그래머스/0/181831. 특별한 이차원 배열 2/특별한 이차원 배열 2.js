function solution(arr) {
    return arr.every((_, i) => arr.every((_, j) => arr[i][j] === arr[j][i])) ? 1 : 0;
}