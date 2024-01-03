function solution(my_string, index_list) {
    let result = "";
    index_list.forEach((val) => {
        result += my_string[val];
    });
    return result;
}