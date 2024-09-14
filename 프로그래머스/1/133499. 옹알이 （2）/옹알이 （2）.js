function solution(babbling) {
    let cnt = 0;
    let can = ["aya", "ye", "woo", "ma"];
    for (let i = 0; i < babbling.length; i++) {
        for (let j = 0; j < can.length; j++) {
            if (babbling[i].includes(can[j].repeat(2))) break;             
            babbling[i] = babbling[i].split(can[j]).join(' ');
        }    
        if (babbling[i].split(' ').join('').length === 0) cnt++;
    }
    return cnt;
}