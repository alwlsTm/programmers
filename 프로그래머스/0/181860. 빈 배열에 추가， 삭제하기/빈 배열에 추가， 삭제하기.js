function solution(arr, flag) {
    let result = [];
    flag.map((v, i) => {
        if (flag[i]) {
            for (let j = 0; j < arr[i] * 2; j++) {
                result.push(arr[i]);
            }
        }
        else result.splice(result.length - arr[i], arr[i]);
    });
    return result;
}