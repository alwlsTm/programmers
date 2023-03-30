function solution(numbers) {
    let num = numbers.reduce((acc, cur) => acc + cur) / numbers.length;
    return num;
}