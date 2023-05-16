function solution(my_string) {
    let num = my_string.replace(/[a-zA-Z]/g, '').split('');
    return num.map((el) => Number(el)).reduce((acc, cur) => acc + cur);
}