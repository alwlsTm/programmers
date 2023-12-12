function solution(num_list) {
    let odd = "", even = "";
    num_list.forEach((val) => {
        if (val % 2 === 0) even += val;
        else odd += val;
    });
    return +odd + +even;
}