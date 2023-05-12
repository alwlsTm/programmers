function solution(my_string) {
    let vowel = "aeiou";
    return [...my_string].filter((el) => !vowel.includes(el)).join("");
}