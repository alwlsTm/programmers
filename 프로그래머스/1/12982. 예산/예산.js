function solution(d, budget) {
    let cnt = 0;
    let dep = d.sort((a, b) => a - b);
    dep.forEach((v, i) => {
        if (budget >= v) cnt = i + 1; 
        budget -= v;
    });
    return cnt;
}