function solution(array) {
    const countedNum = array.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    
    const arr = [];
    for (let i in countedNum) {
        arr.push([Number(i), countedNum[i]]);
    }
    
    arr.sort((a, b) => b[1] - a[1]);
   
    return arr.length === 1 || arr[0][1] > arr[1][1] ? arr[0][0] : -1;
}