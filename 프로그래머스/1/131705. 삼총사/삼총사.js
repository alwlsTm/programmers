function solution(number) {
    let result = 0;
    let len = number.length;
    for (let x = 0; x < len; x++) {
        for (let y = x+1; y < len; y++) {
            for (let z = y+1; z < len; z++) {
                if (number[x] + number[y] + number[z] === 0) {
                    result++;
                }       
            }
        }
    }
    return result;
}