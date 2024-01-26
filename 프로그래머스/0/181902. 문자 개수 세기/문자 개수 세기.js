function solution(my_string) {
    let result = Array(52).fill(0);
    for (let i = 0; i < my_string.length; i++) { 
        let idx = my_string[i].charCodeAt();
        if (idx <= 90) result[idx - 65]++;
        else result[idx - 71]++;
    }
    return result;
}