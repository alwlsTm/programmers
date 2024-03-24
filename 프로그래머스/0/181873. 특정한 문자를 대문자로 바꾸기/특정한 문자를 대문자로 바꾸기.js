function solution(my_string, alp) {
    return [...my_string].map((v, i) => {
       return v === alp ? v.toUpperCase() : v ;
    }).join("");
}