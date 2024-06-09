function solution(phone_number) {
    let num = phone_number;
    return [...num].map((v, i) => i < num.length - 4 ? "*" : v).join("");
}