function solution(strArr) {
    let cnt = strArr.reduce((acc, cur) => {
        acc[cur.length - 1] = (acc[cur.length - 1] || 0) + 1;
        return acc;
    }, []);
    return Math.max(...cnt);
}