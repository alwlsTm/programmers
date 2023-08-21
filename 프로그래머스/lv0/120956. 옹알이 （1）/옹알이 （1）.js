function solution(babbling) {
    let result = 0;
    let can = ['aya', 'ye', 'woo','ma'];
    
    for (let i = 0; i < babbling.length; i++) {
        for (let j = 0; j < can.length; j++) {
            babbling[i] = babbling[i].replace(can[j], 0);
        }
        babbling[i] = babbling[i].replace(/0/g, "")
        if (babbling[i].length === 0) result++;
    }
    return result;
}