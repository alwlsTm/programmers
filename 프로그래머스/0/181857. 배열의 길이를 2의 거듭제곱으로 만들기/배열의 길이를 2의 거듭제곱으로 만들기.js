function solution(arr) {
    let i = 0;
    while (Math.pow(2, i) < arr.length) i++;
    
    let length = Math.pow(2, i) - arr.length;
    return [...arr, ...Array(length).fill(0)];
}