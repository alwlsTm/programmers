function solution(arr) {
    let result = [];
    for(let i = arr.indexOf(2); i <= arr.lastIndexOf(2); i++) {
        result.push(arr[i]);
        if (i === -1) return [-1];
    }
    return result;
}