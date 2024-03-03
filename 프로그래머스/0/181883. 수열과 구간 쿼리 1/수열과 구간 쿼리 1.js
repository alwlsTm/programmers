function solution(arr, queries) {
    queries.forEach(([s, e]) => {
        for (let j = s; j <= e; j++) {
            arr[j]++;
        }
    });
    return arr;
}