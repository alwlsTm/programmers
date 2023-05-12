function solution(my_string) {
    let num = my_string.replace(/[a-z]/g, '').split("");
    let sorted = num.map((el) => Number(el)).sort((a,b) => a - b);
    return sorted;
}