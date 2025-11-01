function solution(word) {
    let dict = [];
    let vowels = ['A', 'E', 'I', 'O', 'U'];
    
    function dfs(curWord) {
        if (curWord.length > 5) return;
        if (curWord.length > 0) dict.push(curWord);
        for (let i = 0; i < vowels.length; i++) {
            dfs(curWord + vowels[i]);
        }
    }
    
    dfs("");
    return dict.indexOf(word) + 1;
}