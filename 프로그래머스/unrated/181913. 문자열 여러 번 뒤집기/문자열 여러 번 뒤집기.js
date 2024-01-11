function solution(my_string, queries) {
    for (let [s, e] of queries) {
    let arr = [...my_string];
        let sliced = arr.slice(s, e + 1);
        let reversed = sliced.reverse().join("");
        arr.splice(s, e - s + 1, reversed);
        my_string = arr.join("");
    }
    return my_string;
}