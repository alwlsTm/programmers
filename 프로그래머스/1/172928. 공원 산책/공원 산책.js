function solution(park, routes) {
    let [parkRow, parkCol] = [park.length - 1, park[0].length - 1];
    let row = park.findIndex((v) => v.includes('S'));
    let col = park[row].indexOf('S');
    
    routes.forEach((v) => {
        let [op, n] = v.split(' ');
        let tempRow = row;
        let tempCol = col;
        let go = true;
        
        for (let i = 0; i < +n; i++) {
            if (op === 'N') tempRow--;
            else if (op === 'S') tempRow++;
            else if (op === 'W') tempCol--;
            else if (op === 'E') tempCol++;
            
            if (
                tempRow > parkRow ||
                tempRow < 0 ||
                tempCol > parkCol ||
                tempCol < 0 ||
                park[tempRow][tempCol] === 'X'
            ) {
                go = false;
                break;
            }
        }
        if (go) {
            row = tempRow;
            col = tempCol;
        }
    });
    return [row, col];
}