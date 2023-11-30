function solution(a, b) {
    let ab = Number("" + a + b);
    let xy = 2 * a * b;
    return Math.max(ab, xy);
}