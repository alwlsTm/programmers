function solution(num_list) {
    let cnt = 0;
    num_list.forEach((num, idx) => {        
        while (num > 1) {
            if (num % 2 === 0) {
                num = num / 2;
            }
            else {
                num = (num - 1) / 2;
            }
            cnt++;        
        }
    });
    return cnt;
}