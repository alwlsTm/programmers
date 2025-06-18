function solution(elements) {
    let arr = elements.concat(elements);
    let set = new Set();
    let len = elements.length;
    for (let i = 0; i < len; i++) {
        let sum = 0;
        for (let j = 0; j < len; j++) {
            sum += arr[i + j];
            set.add(sum);
        }
    }
    return set.size;
}