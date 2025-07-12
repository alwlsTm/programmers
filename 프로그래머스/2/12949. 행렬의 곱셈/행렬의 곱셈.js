function solution(arr1, arr2) {
    let arr = Array.from(Array(arr1.length), () => Array(arr2[0].length).fill(0));
    for (let x = 0; x < arr1.length; x++) {
        for (let y = 0; y < arr2[0].length; y++) {
            for (let z = 0; z < arr1[0].length; z++) {
                arr[x][y] += arr1[x][z] * arr2[z][y];
            }
        }
    }
    return arr;
}