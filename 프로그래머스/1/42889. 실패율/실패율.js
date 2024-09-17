function solution(N, stages) {
    let per = [];
    let user = stages.length;
    
    for (let i = 1; i <= N; i++) {
        let noClear = stages.filter((v) => v === i).length;
        per.push([i, noClear / user]);
        user -= noClear;
    }
    per.sort((a, b) => b[1] - a[1]);
    return per.map((v) => v[0]);
}