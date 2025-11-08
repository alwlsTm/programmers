function solution(n, k) {
    function isPrime(num) {
        if (num === "") return false;
        if (num <= 1) return false;
        if (num === 2) return true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (!(num % i)) return false;
        }
        return true;
    }
    
    let cnt = 0;
    let number = n.toString(k).split("0");
    for (let p of number) {
         if (isPrime(p)) cnt++;
    }
    return cnt;
}