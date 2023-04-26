const gbb = {
    "0": "5",
    "2": "0",
    "5": "2",
}

function solution(rsp) {
    let result = rsp.split("").reduce((acc, cur) => acc + gbb[cur], '');
    return result;
}