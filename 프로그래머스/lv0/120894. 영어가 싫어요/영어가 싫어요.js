function solution(numbers) {
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    arr.forEach((val, idx) => {
        numbers = numbers.replaceAll(val, idx);
    });
    return Number(numbers);
}