function solution(n, lost, reserve) {
    let lostStudent = lost.filter((v) => !reserve.includes(v)).sort((a, b) => a - b);
    let reserveStudent = reserve.filter((v) => !lost.includes(v)).sort((a, b) => a - b);
    let result = n - lostStudent.length;
    
    for (let i = 0; i < lostStudent.length; i++) {
        let lostNum = lostStudent[i];
        for (let j = 0; j < reserveStudent.length; j++) {
            let reserveNum = reserveStudent[j];
            if (reserveNum === lostNum - 1 || reserveNum === lostNum + 1) {
                result += 1;
                reserveStudent[j] = -1;
                break;
            }
        }
    }
    return result;
}   