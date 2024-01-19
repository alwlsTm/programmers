function solution(my_string, s, e) {
    let arr = [...my_string];
    let slc = arr.slice(s, e + 1).reverse().join("");
    arr.splice(s, slc.length, slc);
    return arr.join("");
}