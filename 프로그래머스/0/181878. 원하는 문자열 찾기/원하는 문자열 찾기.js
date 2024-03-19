function solution(myString, pat) {
    let strUp = myString.toUpperCase();
    let patUp = pat.toUpperCase();
    return strUp.includes(patUp) ? 1 : 0;
}