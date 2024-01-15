function solution(my_string) {
    let result = [];
    for (let i = 0; i < my_string.length; i++) {
        let slc = my_string.slice(i);
        result.push(slc);
    }
    return result.sort();
}