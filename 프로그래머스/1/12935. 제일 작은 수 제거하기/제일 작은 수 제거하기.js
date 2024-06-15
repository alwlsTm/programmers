function solution(arr) {
    let min = Math.min(...arr);
    if (arr.length === 1) return [-1];
    return arr.filter((v, i) => !(v === min));
}