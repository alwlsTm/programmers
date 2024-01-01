function solution(a, b, c, d) {
    let dices = [a, b, c, d];
    let cnt = dices.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    
    let key = Object.keys(cnt);
    let value = Object.values(cnt);
    switch (Math.max(...value)) {
        case 4:
            return 1111 * a;
        case 3:
            let three = key.find((v) => cnt[v] === 3);
            let one = key.find((v) => cnt[v] === 1);
            return (10 * +three + +one) ** 2;
        case 2:
            if (key.length === 2) {
                return (+key[0] + +key[1]) * Math.abs(+key[0] - +key[1]);
            } else {
                return key.reduce((acc, cur) => cnt[cur] === 1 ? acc * cur : acc, 1);
            }
        default:
            return Math.min(...key);
    }
}