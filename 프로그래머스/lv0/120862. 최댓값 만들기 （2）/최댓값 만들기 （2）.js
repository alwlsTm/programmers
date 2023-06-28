function solution(numbers) {
    let desc = numbers.sort((a, b) => b - a);
    let first = desc[0] * desc[1];
    let last = desc[desc.length - 1] * desc[desc.length - 2];
    return first > last ? first : last;
}