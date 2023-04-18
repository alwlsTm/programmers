function solution(my_string, letter) {
    let str = [...my_string].filter((el) => el !== letter).join("");
    return str;
}