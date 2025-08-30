function solution(priorities, location) {
    let cnt = 0;
    let array = priorities.map((priority, idx) => [priority, idx]);
    
    while (array.length) {
        let [priority, idx] = array.shift();
        if (array.some(([p, _]) => p > priority)) {
            array.push([priority, idx]);            
        } else {
            cnt++;
            if (idx === location) break;
        }
    }
    return cnt;
}