function solution(n) {
    let str = n.toString();
    let sum = [...str].reduce((acc, cur) => acc + Number(cur), 0);
    return sum;
}