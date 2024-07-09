function solution(n, m) {
    let [min, max] = [n, m].sort((a, b) => a - b);
    let gcd = 0;
    for (let i = 1; i <= min; i++) {
        if (n % i === 0 && m % i === 0) gcd = i;
    }
    let lcm = (n * m) / gcd;
    return [gcd, lcm];
}