function solution(num_list, n) {
    let arr = [];
    let len = num_list.length / n;
    for (let i = 0; i < len; i++) { 
        arr.push(num_list.slice(i*n, i*n+n));   
    }   
    return arr;
}