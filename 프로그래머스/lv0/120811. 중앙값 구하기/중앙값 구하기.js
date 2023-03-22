function solution(array) {
    const sorted = array.sort((a,b) => a - b);
    const mid = parseInt(array.length / 2);
    return sorted[mid];
}