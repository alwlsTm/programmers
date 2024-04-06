function solution(binomial) {
    let [a, op, b] = binomial.split(' ');
    let num1 = Number(a);
    let num2 = Number(b);
    
    if (op === "+") return num1 + num2;
    if (op === "-") return num1 - num2;
    if (op === "*") return num1 * num2;
}