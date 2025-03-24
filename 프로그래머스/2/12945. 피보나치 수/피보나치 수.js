function solution(n) {
    let fn = 0;
    let f0 = 0;
    let f1 = 1;
    for (let i = 2; i <= n; i++) {
        fn = (f0 + f1) % 1234567;
        f0 = f1;
        f1 = fn;
    }
    return fn;
}