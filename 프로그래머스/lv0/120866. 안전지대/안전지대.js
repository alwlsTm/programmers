function solution(board) {
    let result = 0;
    let danger = [
        [-1, 1], [0, 1], [1, 1], [-1, 0], [1, 0], [-1, -1], [0, -1], [1, -1]
    ];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                danger.forEach((val) => {
                    let [x,y] = val;
                    [x,y] = [x + i, y + j];
                    if (
                        x >= 0 && 
                        x < board.length && 
                        y >= 0 && 
                        y < board[i].length && 
                        board[x][y] === 0
                    ) board[x][y] = 2;
                });
            } 
        }
    }
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            if (board[x][y] === 0) result++;
        }
    }
    return result;
}