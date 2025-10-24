function solution(dirs) {
    let now = [0, 0];
    let visited = new Set();
    let dir = { U: [0, 1], D: [0, -1], R: [1, 0], L: [-1, 0] };
    
    for (let d of dirs) {
        let x = now[0] + dir[d][0];
        let y = now[1] + dir[d][1];
        
        if (x > 5 || x < -5 || y > 5 || y < -5) continue;
        
        visited.add(`${now[0]}${now[1]}${x}${y}`);
        visited.add(`${x}${y}${now[0]}${now[1]}`);
        
        now = [x, y];
    }
    return visited.size / 2;
}