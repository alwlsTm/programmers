function solution(topping) {
    let cnt = 0;
    let left = new Map();
    let right = new Map();
    
    for (let t of topping) {
        right.set(t, (right.get(t) || 0) + 1);
    }
    for (let i = 0; i < topping.length - 1; i++) {
        let current = topping[i];
        left.set(current, (left.get(current) || 0) + 1);
        right.set(current, right.get(current) - 1);
        if (right.get(current) === 0) {
            right.delete(current);
        }
        if (left.size === right.size) {
            cnt++; 
        }
    }
    return cnt;
}