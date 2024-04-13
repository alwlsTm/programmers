function solution(arr) {
    let result = [];
    arr.forEach((v, i) => {
        for (let j = 0; j < arr[i]; j ++) {
            result.push(v);
        }
    });
    return result
}