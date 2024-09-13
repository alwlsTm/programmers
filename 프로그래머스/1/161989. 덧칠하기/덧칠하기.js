function solution(n, m, section) {
    let cnt = 0;
    let paint = 0;
    section.forEach((v) => {
        if (v > paint) {
            cnt++;
            paint = v + m - 1;
        }
    });
    return cnt;
}