function solution(answers) {
    let result = [];
    let correct = [0, 0, 0];
    let member = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];
    for (let i = 0; i < member.length; i++) {
        let len = member[i].length;
        for (let j = 0; j < answers.length; j++) {
            answers[j] === member[i][j % len] ? correct[i]++ : correct[i];       
        }   
    }
    correct.forEach((v, i) => {
        if (v === Math.max(...correct)) result.push(i + 1);
    });
    return result;
}