function solution(n, words) {
    let result = [0, 0];
    for (let i = 0; i < words.length; i++) {
        let num  = i % n + 1;
        let turn = Math.ceil((i + 1) / n);
        
        if (i > 0) {
            let first = words[i][0];
            let last = words[i - 1].slice(-1);
            if (last !== first || i > words.indexOf(words[i])) {
                result = [num, turn];
                break;
            }
        }
    }
    return result;
}