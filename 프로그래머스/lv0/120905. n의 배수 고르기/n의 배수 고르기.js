function solution(n, numlist) {
    let result = numlist.filter((el) => el % n === 0);
    return result;
}