function solution(picture, k) {
    let result = [];
    picture.map((v) => {
        let repeat = [...v].map((v, i) => v.repeat(k)).join("");
        for (let i = 0; i < k; i++) result.push(repeat);
    })
    return result;
}