function solution(s) {
    let str = s.split(' ');
    return Math.min(...str) + ' ' + Math.max(...str);
}