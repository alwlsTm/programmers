function solution(arr, query) {
    let result = [...arr];
    
    query.forEach((v, i) => {
        if (i % 2 === 0) {
            result.splice(query[i] + 1);
        } else {
            result.splice(0, query[i]);
        }
    })
    return result;
}