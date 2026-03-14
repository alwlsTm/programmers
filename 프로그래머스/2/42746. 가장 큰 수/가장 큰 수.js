function solution(numbers) {
    let number = numbers.map(String)
    .sort((a, b) => (b + a) - (a + b))
    .join('');
    
    return number[0] === '0' ? '0' : number;
}