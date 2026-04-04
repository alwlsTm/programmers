function solution(n, t, m, p) {
    let str = '';
    let num = 0;
    let result = '';
    
    while (str.length < t * m) {
        str += num.toString(n).toUpperCase();
        num++;
    }
    
    for (let i = 0; i < t; i++) {
        result += str[p - 1 + i * m];
    }
    return result;
}