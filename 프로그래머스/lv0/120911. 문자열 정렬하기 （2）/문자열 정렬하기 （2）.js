function solution(my_string) {
    let str = my_string.toLowerCase();
    return [...str].sort().join("");
}