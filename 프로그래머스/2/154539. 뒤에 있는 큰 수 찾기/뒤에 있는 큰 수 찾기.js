function solution(numbers) {
    let arr = Array(numbers.length).fill(-1);
    let stack = [];
    for (let i = 0; i < numbers.length; i++) {
        while (stack && numbers[i] > numbers[stack.at(-1)]) {
            arr[stack.pop()] = numbers[i];
        }
        stack.push(i);
    }
    return arr;
}