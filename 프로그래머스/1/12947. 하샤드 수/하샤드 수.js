function solution(x) {
    let num = [...String(x)].reduce((acc, cur) => acc + +cur, 0);
    return x % num === 0 ? true : false;
}