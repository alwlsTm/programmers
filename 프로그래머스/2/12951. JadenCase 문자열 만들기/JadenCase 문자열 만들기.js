function solution(s) {
    let str = s.split(' ')
               .map((v) => v.slice(0, 1).toUpperCase() + v.slice(1).toLowerCase());
    return str.join(' ');
}