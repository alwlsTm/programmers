function solution(myString, pat) {
    let end = myString.lastIndexOf(pat) + pat.length;
    return myString.slice(0, end);
}