function solution(citations) {
    citations.sort((a, b) => b - a);
    let hidx = 0;
    while (hidx + 1 <= citations[hidx]) {
        hidx++;
    }
    return hidx;
}