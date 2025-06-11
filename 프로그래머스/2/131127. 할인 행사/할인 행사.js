function solution(want, number, discount) {
    let day = 0;
    for (let i = 0; ; i++) {
        if (discount.length - i < 10) break;
        let dis = discount.slice(i, i + 10);
        
        let cnt = 0;
        for (let j = 0; j < want.length; j++) {
            if (dis.filter((v) => v === want[j]).length === number[j]) cnt++;
            else break;
        }
        if (cnt === want.length) day++;
    }
    return day;
}