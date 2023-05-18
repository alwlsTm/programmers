function solution(s) {
    let arr = [];
    let str = s.split(' ');
    str.forEach((el, idx) => {
        if (str[idx + 1] !== 'Z' && el !== 'Z') arr.push(el);
    });
    return arr.reduce((acc, cur) => acc + Number(cur), 0);
}