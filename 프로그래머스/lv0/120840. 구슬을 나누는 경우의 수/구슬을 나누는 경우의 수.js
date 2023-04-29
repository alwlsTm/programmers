function factorial(n) {
    let result = BigInt(1);
    for (let i = 1; i <= n; i++) {
        result *= BigInt(i);
    }
    return result;
}

function solution(balls, share) {
    let ja = factorial(balls);
    let mo = factorial(balls - share) * factorial(share);
    return ja / mo;
}