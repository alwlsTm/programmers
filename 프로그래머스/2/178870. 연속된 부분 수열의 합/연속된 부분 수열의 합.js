function solution(sequence, k) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let result = [0, sequence.length];
    
    for (right = 0; right < sequence.length; right++) {
        sum += sequence[right];
        
        while (sum > k) {
            sum -= sequence[left];
            left++;
        }
        
        if (sum === k) {
            if (result[1] - result[0] > right - left) {
                result = [left, right];
            }
        }
    }
    return result;
}