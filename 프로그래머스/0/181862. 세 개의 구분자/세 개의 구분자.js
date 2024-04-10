function solution(myStr) {
    let arr = myStr.split(/[a|b|c]/g);
    let result = arr.filter((v) => v !== "");
    return result.length === 0 ? ["EMPTY"] : result;
}