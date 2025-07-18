function solution(clothes) {
    let cnt = 1;
    let map = new Map();
    for (let i = 0; i < clothes.length; i++) {
        let type = clothes[i][1];
        map.set(type, (map.get(type) || 0) + 1);
    }
    
    for (let value of map.values()) {
        cnt *= (value + 1);
    }
    return cnt - 1;
}