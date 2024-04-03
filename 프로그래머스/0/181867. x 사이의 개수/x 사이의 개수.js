function solution(myString) {
    let str = myString.split("x");
    return str.map((v) => v.length);
}