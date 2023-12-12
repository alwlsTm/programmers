function solution(num_list) {
    let x = 1, y = 0;
    num_list.forEach((val) => {
        x *= val;
        y += val;
    });
    return x > y**2 ? 0 : 1;
}