function solution(board, moves) {
    let cnt = 0;
    let basket = [];
    for (let i = 0; i < moves.length; i++) {
        let now = moves[i] - 1;
        for (let j = 0; j < board.length; j++) {
            if (board[j][now] !== 0) {
                if (basket[basket.length - 1] === board[j][now]) {
                    basket.pop();
                    cnt += 2;
                } else {
                    basket.push(board[j][now]);
                }
                board[j][now] = 0;
                break;
            }
        }
    }
    return cnt;
}