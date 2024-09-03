function solution(nums) {
    let pokemon = [...new Set(nums)].length;
    let half = nums.length / 2;
    return pokemon > half ? half : pokemon;
}