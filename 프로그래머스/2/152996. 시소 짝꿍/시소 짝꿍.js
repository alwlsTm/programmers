function solution(weights) {
    let siso = 0;
    let map = new Map();
    
    for (let w of weights) {
        map.set(w, (map.get(w) || 0) + 1);
    }
    
    for (let [w, cnt] of map) {
        let ratios = [(w * 1) / 2, (w * 2) / 3, (w * 3) / 4];

        if (cnt >= 2) siso += cnt * (cnt - 1) / 2;
        for (let r of ratios) {
            if (Number.isInteger(r) && map.has(r)) {
                siso += cnt * map.get(r);
            }
        }
    }
    return siso;
}