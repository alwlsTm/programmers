function solution(my_string) {
    let arr = my_string.split(" ");
    let num = Number(arr[0]);
    arr.forEach((val, idx) => {
        if (val === "+") {
            num += Number(arr[idx + 1]);
        }
        if (val === "-") {
            num -= Number(arr[idx + 1]);
        }
    });
    return num;
}