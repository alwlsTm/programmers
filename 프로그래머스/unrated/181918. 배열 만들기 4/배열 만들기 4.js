function solution(arr) {
    let stk = [];
    let i = 0;
    
    while (i < arr.length) {    
        if (stk && stk[stk.length - 1] < arr[i] || stk.length === 0) {
            stk.push(arr[i]);
            i++;
        } else {
            stk.pop();
        }
    }
    return stk;
}