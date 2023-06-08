function solution(num, k) {
    let q = num.toString().indexOf(k.toString());
    return q >= 0 ? q + 1 : -1;
}