function solution(n) {
    let num = 0;
    let n_cnt = n.toString(2).match(/1/g).length;
    for (let i = n + 1; ; i++) {
        let i_cnt = i.toString(2).match(/1/g).length;
        if (n_cnt === i_cnt) {
            num = i;
            break;
        }
    }
    return num;
}