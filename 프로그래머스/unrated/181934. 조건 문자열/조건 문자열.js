function solution(ineq, eq, n, m) {
    let is = eq === "=" ? `${ineq}=` : `${ineq}`;
    return eval(`${n} ${is} ${m}`) ? 1 : 0;
}