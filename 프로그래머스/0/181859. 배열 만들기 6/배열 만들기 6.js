function solution(arr) {
    let stk = [];
    arr.forEach((v, i) => {
       if (stk[stk.length - 1] === v) {
           stk.pop();
       } else {
           stk.push(arr[i]);
       }
    });
    return stk.length ? stk : [-1];
}