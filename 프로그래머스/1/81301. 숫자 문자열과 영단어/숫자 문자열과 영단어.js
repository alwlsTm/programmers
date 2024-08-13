function solution(s) {
    let str = s;
    let word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    for (let i = 0; i < word.length; i++) {
        let arr = str.split(word[i]);
        str = arr.join(i);
    }
    return +str;
}