function solution(n, arr1, arr2) {
    let map = arr1.map((v, i) => (v | arr2[i]).toString(2).padStart(n, 0));
    return map.map((v) => v.replace(/0|1/g, (v) => +v ? "#" : ' '));
}