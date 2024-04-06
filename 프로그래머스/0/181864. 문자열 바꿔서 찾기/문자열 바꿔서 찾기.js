function solution(myString, pat) {
    let arr = [...myString].map((v, i) => {
        return myString[i] === "A" ? "B" : "A"
    }).join("");
    return arr.includes(pat) ? 1 : 0;
}