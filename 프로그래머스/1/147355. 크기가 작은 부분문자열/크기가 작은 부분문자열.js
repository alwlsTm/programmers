function solution(t, p) {
    let result = 0;
    for (let i = 0; i < t.length - p.length + 1; i++) {
        let slc = t.slice(i, i + p.length);
        if (p >= slc) result++;
    }
    return result;
}