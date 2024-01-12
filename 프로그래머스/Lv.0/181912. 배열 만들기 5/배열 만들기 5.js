function solution(intStrs, k, s, l) {
    let result = [];
    intStrs.forEach((val) => {
        let spliced = [...val].splice(s, l).join("");
        if (Number(spliced) > k) {
            result.push(Number(spliced));
        }
    });
    return result;
}