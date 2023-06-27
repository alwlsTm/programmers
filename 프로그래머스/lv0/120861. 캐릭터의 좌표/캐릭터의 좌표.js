function solution(keyinput, board) {
    let result = [0,0];
    let max = [board[0] / 2, board[1] / 2];
    keyinput.forEach((val, idx) => {
        if (val === "left" && result[0] - 1 > -max[0]) result[0]--;
        if (val === "right" && result[0] + 1 < max[0]) result[0]++;
        if (val === "up" && result[1] + 1 < max[1]) result[1]++;
        if (val === "down" && result[1] - 1 > -max[1]) result[1]--;
    });
    return result;
}