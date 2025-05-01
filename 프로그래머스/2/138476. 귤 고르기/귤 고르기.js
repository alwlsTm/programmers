function solution(k, tangerine) {
    let cnt = 0;
    let arr = new Map();
    for (let t of tangerine) {
        arr.set(t, (arr.get(t) || 0) + 1);
    }
    
    arr = [...arr].sort((a, b) => b[1] - a[1]);
    for (let [a, b] of arr) {
        cnt++;
        if (k > b) k -= b;
        else break;
    }
    return cnt;
}