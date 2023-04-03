function solution(my_string) {
    let str = "";
    let len = my_string.length;
    for (let i = len - 1; i >= 0; i--) {
        str += my_string[i];
    }
    return str;
}