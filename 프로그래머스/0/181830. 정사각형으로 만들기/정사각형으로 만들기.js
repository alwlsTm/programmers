function solution(arr) {
    let row = arr.length;
    let col = arr[0].length;
    
    if (row > col) {
        let val = Array(row - col).fill(0);
        return arr.map((v) => [...v, ...val]);
    }
    if (col > row) {
        for (let i = 0; i < col - row; i++) {
            arr.push(Array(col).fill(0));
        }
    } 
    return arr;
}