function solution(q, r, code) {
    return [...code].filter((val, idx) => idx % q === r).join("");
}