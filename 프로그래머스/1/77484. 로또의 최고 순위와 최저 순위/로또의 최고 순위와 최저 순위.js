function solution(lottos, win_nums) {
    let arr = [6, 6, 5, 4, 3, 2, 1];
    let yes = lottos.filter((v) => win_nums.includes(v)).length;
    let zero = lottos.filter((v) => v === 0).length;
    let min = arr[yes];
    let max = arr[yes + zero];
    return [max, min];
}