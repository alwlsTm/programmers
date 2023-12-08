function solution(a, d, included) {
    let result = 0;
    included.forEach((val, idx) => {
        if (val) result += a + (d * idx);
    });
    return result;
}