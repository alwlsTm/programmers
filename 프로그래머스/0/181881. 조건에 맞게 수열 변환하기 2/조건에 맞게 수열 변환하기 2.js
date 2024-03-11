function solution(arr) {
    let idx = 0;
    while (true) {
        let nextArray = arr.map((v, i) => {
            if (v >= 50 && v % 2 === 0) return v / 2;
            if (v < 50 && v % 2 !== 0) return v * 2 + 1;
            return v;
        });
        
        let compare = arr.every((v, i) => v === nextArray[i]);
        if (compare) break;
        
        idx++;
        arr = nextArray;
    }
    return idx;
}
