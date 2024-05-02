function solution(rank, attendance) {
    let top3 = rank.filter((_, i) => attendance[i]).sort((a, b) => a - b);
    let [a, b, c] = top3.map((v) => [...rank].indexOf(v));
    return 10000 * a + 100 * b + c;
}