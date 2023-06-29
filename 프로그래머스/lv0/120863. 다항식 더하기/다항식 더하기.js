function solution(polynomial) {
    let result = [];
    let arr = polynomial.split(" + ");
    let xNum = 0;
    let num = 0;
    arr.forEach((val, idx) => {
        if (val.includes("x")) {
            xNum += parseInt(val.replace("x", "") || 1);                  
        } else {
            num += parseInt(val);
        }
    });
    if (xNum) result.push(`${xNum === 1 ? "" : xNum}x`);
    if (num) result.push(num);
    return result.join(" + ");
}