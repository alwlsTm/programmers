function solution(l, r) {
    let result = [];
    for (let i = l; i <= r; i++) {
        if (!String(i).match(/[^05]+/)) result.push(i);
    }
    return result.length ? result : [-1];
}