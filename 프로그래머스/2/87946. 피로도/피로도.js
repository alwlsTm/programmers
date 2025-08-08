function solution(k, dungeons) {
    let result = 0;
    let visited = Array(dungeons.length).fill(false);
    function DFS(hp, cnt) {
        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && hp >= dungeons[i][0]) {
                visited[i] = true;
                DFS(hp - dungeons[i][1], cnt + 1);
                visited[i] = false;
            }
        }
        result = Math.max(result, cnt);
    }
    DFS(k, 0);
    return result;
}