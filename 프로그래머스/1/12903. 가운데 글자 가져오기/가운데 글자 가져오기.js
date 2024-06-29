function solution(s) {
    let mid = Math.trunc(s.length / 2);
    return s.length % 2 !== 0 ? s[mid] : s[mid - 1] + s[mid];
}