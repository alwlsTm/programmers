function solution(str_list) {
    let result = [];
    let idx = str_list.findIndex((v) => v === "l" || v === "r");
    
    if (str_list[idx] === "l") {
        return str_list.slice(0, idx);
    } else if (str_list[idx] === "r") {
        return str_list.slice(idx + 1);
    } else {
        return [];
    }
}