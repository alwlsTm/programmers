function solution(arr, intervals) {
    let result = [];
    intervals.forEach((v, i) => {
        let slc = arr.slice(v[0], v[1] + 1);
        result.push(slc);
    });
    return result.flat();
}