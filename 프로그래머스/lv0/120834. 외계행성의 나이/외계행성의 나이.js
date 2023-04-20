function solution(age) {
    let ageArr = String(age).split("");
    let str = '';
    for (let i = 0; i < ageArr.length; i++) {
       str += String.fromCharCode(parseInt(ageArr[i]) + 97);
    }
    return str;
}