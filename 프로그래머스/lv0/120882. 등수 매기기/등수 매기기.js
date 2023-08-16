function solution(score) {
    let arr = [];
    score.forEach((val, idx) => {
        let avg = (val[0] + val[1]) / 2;
        arr.push(avg);
    });
    let sorted = [...arr].sort((a, b) => b - a);
    return arr.map((el) => sorted.indexOf(el) + 1);
}