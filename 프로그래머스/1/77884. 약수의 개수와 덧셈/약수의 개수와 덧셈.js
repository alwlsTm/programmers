function divisor(num) {
    let cnt = 0;
    for(let i = 1; i <= num; i++) {
        if (num % i === 0) cnt++;
    }    
    return cnt;
}

function solution(left, right) {
    let result = 0;
    for (let i = left; i <= right; i++) {
        divisor(i) % 2 === 0 ? result += i : result -= i;
    }
    return result;
}