function solution(k, m, score) {
    score.sort((a, b) => a - b);
    let total = 0;
    while (score.length >= m) {
        let box = score.splice(score.length - m, m);
        let price = box[0] * m;
        total += price;
    }
    return total;
}