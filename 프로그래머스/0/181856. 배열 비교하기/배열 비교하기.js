function solution(arr1, arr2) {
    const sumFunc = (arr) => arr.reduce((acc, cur) => acc + cur, 0);
    
    let len1 = arr1.length;
    let len2 = arr2.length;
    
    if (len1 !== len2) return len1 > len2 ? 1 : -1;
    
    let sum1 = sumFunc(arr1);
    let sum2 = sumFunc(arr2);    
    
    if (sum1 === sum2) return 0;
    else return sum1 > sum2 ? 1 : -1;
}