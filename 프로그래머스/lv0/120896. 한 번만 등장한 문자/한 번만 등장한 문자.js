function solution(s) {
    let result = "";
    let obj = {};
    let arr = [...s].sort();
    arr.forEach((val, idx) => {
        if (obj[val]) obj[val]++;
        else obj[val] = 1;
    });
    
    for (let key in obj) {
        if (obj[key] === 1) result += key;
    }
    return result;
}