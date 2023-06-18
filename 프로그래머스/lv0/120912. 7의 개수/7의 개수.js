function solution(array) {
    let str = array.join("");
    let cnt = 0;
    for (let s of str) {
        if (Number(s) === 7) cnt++;
    }
    return cnt;
}