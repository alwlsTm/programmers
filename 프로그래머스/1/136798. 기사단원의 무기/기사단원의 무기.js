function solution(number, limit, power) {
    let attack = [];
    for (let i = 1; i <= number; i++) {
        let cnt = 1;
        for (let j = 1; j <= i / 2; j++) {
            if (i % j === 0) cnt++;
        }
        attack.push(cnt);
    }
    return attack.reduce((acc, cur) => {
        return cur > limit ? acc += power : acc += cur;
    });
}