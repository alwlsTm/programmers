function solution(keymap, targets) {
    let press = [];
    let map = new Map();
    for (let key of keymap) {
        for (let i = 0; i < key.length; i++) {
            if (!map.has(key[i]) || map.get(key[i]) > i + 1) {
                map.set(key[i], i + 1);
            }
        }
    }
    
    for (let target of targets) {
        let cnt = 0;
        for (let i = 0; i < target.length; i++) {
            cnt += map.get(target[i]);
        }
        press.push(cnt || -1);
    }
    return press;
}