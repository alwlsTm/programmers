function solution(n) {
    let arr = Array.from(Array(n), () => Array(n).fill(0));
    let cnt = 1;
    let startX = 0, endX = n - 1;
    let startY = 0, endY = n - 1;
    
    while (cnt <= n * n) {
        for (let r = startY; r <= endY; r++) {
            arr[startX][r] = cnt;
            cnt++;
        }
        startX++;
        for (let d = startX; d <= endX; d++) { 
            arr[d][endY] = cnt;
            cnt++; 
        }
        endY--; 
        for (let l = endY; l >= startY; l--) {
            arr[endX][l] = cnt;
            cnt++; 
        }
        endX--; 
        for (let u = endX; u >= startX; u--) { 
            arr[u][startY] = cnt; 
            cnt++;
        }
        startY++;  
    }
    return arr;
}