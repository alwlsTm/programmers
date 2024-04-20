function solution(arr, k) {
    let array = [...new Set(arr)];
    if (array.length > k) return array.slice(0, k);
    else return [...array, ...Array(k - array.length).fill(-1)];
}