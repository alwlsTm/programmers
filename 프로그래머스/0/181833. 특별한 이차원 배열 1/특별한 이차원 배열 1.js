function solution(n) {
    let arr = Array(n).fill(Array(n).fill(0));
    
    return arr.map((a, ai) => {
        return a.map((b, bi) => ai === bi ? 1 : b);
    })
}