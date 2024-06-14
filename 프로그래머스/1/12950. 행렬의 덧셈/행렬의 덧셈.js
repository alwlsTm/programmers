function solution(arr1, arr2) {
    return arr1.map((_, x) => arr1[x].map((_, y) => arr1[x][y] + arr2[x][y]));
}