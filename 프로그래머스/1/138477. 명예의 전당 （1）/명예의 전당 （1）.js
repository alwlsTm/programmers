function solution(k, score) {
    let rank = [];
    let result = [];
    for (let i = 0; i < score.length; i++) {
        rank.push(score[i]);
        rank.sort((a, b) => b - a);
        result.push(Math.min(...rank.slice(0, k)));
    }
    return result;
}