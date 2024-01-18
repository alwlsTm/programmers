function solution(my_string, is_prefix) {
    let slc = my_string.slice(0, is_prefix.length);
    return slc === is_prefix ? 1 : 0;
}