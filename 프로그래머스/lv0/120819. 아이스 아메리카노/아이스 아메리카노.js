function solution(money) {
    const coffee = parseInt(money / 5500);
    const change = money - (5500 * coffee);
    return [coffee, change];
}