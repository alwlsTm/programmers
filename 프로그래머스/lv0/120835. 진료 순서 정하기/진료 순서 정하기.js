function solution(emergency) {
    let arr = [...emergency].sort((a, b) => b - a);
    return emergency.map((el) => arr.indexOf(el) + 1);
}