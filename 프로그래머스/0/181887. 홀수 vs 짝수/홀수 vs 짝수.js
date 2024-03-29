function solution(num_list) {
    let result = num_list.reduce((acc, cur, idx) => {
        if (idx % 2 === 0) return [acc[0], acc[1] += cur];
        else return [acc[0] += cur, acc[1]];
    }, [0, 0]);
    return result[0] > result[1] ? result[0] : result[1];
}