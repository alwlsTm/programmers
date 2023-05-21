function solution(my_string) {
    let str = my_string.split("");
    return [...new Set(str)].join("");
}