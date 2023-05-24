function solution(order) {
    let result = 0;
    let num = "369"
    let str = order.toString();
    for (let s of str) {
        if (s === num[num.indexOf(s)]) result++;
    }
    return result;
}