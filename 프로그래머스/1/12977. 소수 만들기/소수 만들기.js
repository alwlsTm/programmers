function solution(nums) {
    let total = 0;
    function isPrimeNumber(sum) {
        for (let i = 2; i <= Math.sqrt(sum); i++) {
            if (sum % i === 0) return false;
        }
        return true;
    }
    for (let x = 0; x < nums.length - 2; x++) {
        for (let y = x + 1; y < nums.length - 1; y++) {
            for (let z = y + 1; z < nums.length; z++) {
                let sum = nums[x] + nums[y] + nums[z];
                if (isPrimeNumber(sum)) total++;
            }
        }
    }
    return total;
}