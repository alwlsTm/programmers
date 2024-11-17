function solution(players, callings) {
    let playerMap = {};
    players.forEach((name, i) => {
        playerMap[name] = i;
    })
    
    callings.forEach((name) => {
        let curIdx = playerMap[name];
        let front = players[curIdx - 1];
        
        [players[curIdx - 1], players[curIdx]] = [name, players[curIdx - 1]];
        [playerMap[front], playerMap[name]] = [curIdx, curIdx - 1];
    });
    return players;
}