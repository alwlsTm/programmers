function solution(numbers, hand) {
    function getDistance (cur, tar) {
        let curPos = keypad[cur];
        let tarPos = keypad[tar];
        return (
            Math.abs(curPos[0] - tarPos[0]) +
            Math.abs(curPos[1] - tarPos[1])
        );
    }
    
    let result = '';
    let left = '*';
    let right = '#';
    let keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2],
    };
    
    numbers.forEach((n) => {
        if (n === 1 || n === 4 || n === 7) {
            result += 'L';
            left = n;
        } else if (n === 3 || n === 6 || n === 9) {
            result += 'R';
            right = n;
        } else {
            let disLeft = getDistance(left, n);
            let disRight = getDistance(right, n);
            if (disLeft === disRight) {
                if (hand === 'left') {
                    result += 'L';
                    left = n;
                } else {
                    result += 'R';
                    right = n;
                }
            }
            if (disLeft > disRight) {
                result += 'R';
                right = n;
            }
            if (disRight > disLeft) {
                result += 'L';
                left = n;
            }   
        }
    });
    return result;
}