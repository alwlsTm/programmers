function solution(a, b, c) {
    let arr = new Set([a, b, c]);
    if ([...arr].length === 1) {
        return (a + b + c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3);
    }
    if ([...arr].length === 2) {
        return (a + b + c) * (a**2 + b**2 + c**2);
    }
    return a + b + c;
}