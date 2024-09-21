function solution(dartResult) {
    let score = 0;
    let darts = [];
    for (let i = 0; i < dartResult.length; i++) {
        if (!isNaN(dartResult[i])) {
            score = +dartResult[i - 1] === 1 ? 10 : +dartResult[i];
        }
        else if (dartResult[i] === 'S') darts.push(score);
        else if (dartResult[i] === 'D') darts.push(score ** 2);
        else if (dartResult[i] === 'T') darts.push(score ** 3);
        else if (dartResult[i] === '*') {
            darts[darts.length - 2] *= 2;
            darts[darts.length - 1] *= 2;
        } else if (dartResult[i] === '#') {
            darts[darts.length - 1] *= -1;
        }
    }
    return darts.reduce((acc, cur) => acc + cur, 0);
}