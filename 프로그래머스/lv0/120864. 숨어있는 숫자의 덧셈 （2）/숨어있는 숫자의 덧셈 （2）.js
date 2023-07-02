function solution(my_string) {
    let arr = my_string.split(/[^0-9]/g);
    let sum = 0;
    arr.forEach((val, idx) => {
        if (Number(val)) {
            sum += Number(val);
        }
    });
    return sum;
}