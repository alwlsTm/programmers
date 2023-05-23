function solution(array, n) {
    let arr = [];
    array.sort((a, b) => a - b)
         .forEach((val) => arr.push(Math.abs(n - val)));
    return array[arr.indexOf(Math.min(...arr))];
}