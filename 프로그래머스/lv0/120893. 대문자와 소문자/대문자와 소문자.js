function solution(my_string) {    
    let result = "";
    for (let str of my_string) {
        if (str.charCodeAt() >= 65 && str.charCodeAt() <= 90) {
            result += str.toLowerCase();
        } else {
            result += str.toUpperCase();
        }
    }
    return result;
}