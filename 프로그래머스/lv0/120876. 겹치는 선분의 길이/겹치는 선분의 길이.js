function solution(lines) {
    let result = 0;
    let line = new Array(200).fill(0);
    for (let i = 0; i < lines.length; i++) {
        let start = lines[i][0];
        let end = lines[i][1];
        for (let j = start; j < end; j++) {
            line[100 + j] += 1;
        }
    }
    line.forEach((val, idx) => {
        if (line[idx] > 1) result++;
    })
    return result;
}