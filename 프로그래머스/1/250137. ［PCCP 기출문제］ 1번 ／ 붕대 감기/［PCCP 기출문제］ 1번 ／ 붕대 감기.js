function solution(bandage, health, attacks) {  
    let [t, x, y] = bandage;
    let hp = health;
    let curTime = 0;
    for (const [time, damage] of attacks) {
        let timeDif = time - curTime - 1;
        let success = Math.floor(timeDif / t);
        let recovery = (timeDif * x) + (y * success);
        hp += recovery;
        
        if (hp >= health) hp = health;
        hp -= damage;
        
        if (hp <= 0) return -1;
        curTime = time;
    }
    return hp;
}