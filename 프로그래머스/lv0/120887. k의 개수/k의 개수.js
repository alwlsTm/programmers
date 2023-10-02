function solution(i, j, k) {
    let result = 0;
    let arr = [];
    
    for (let x = i; x <= j; x++) {
        arr.push(String(x));
    }
    
    for (let y = 0; y < arr.length; y++) {        
        arr[y].split('').forEach((val, idx) => {
            if (val === String(k)) result++;        
        })
    }
    return result;
}