function solution(s) {
    let cnt = 0;
    let stack = [];
    let bracket = {'(': ')', '{': '}', '[': ']'};
    let flag = true;
    for (let i = 0; i < s.length; i++) {
        let str = s.slice(i) + s.slice(0, i);
        flag = true;
        for (let j = 0; j < s.length; j++) {
            if (['(', '{', '['].includes(str[j])) {
                stack.push(str[j]);
            } else {
                if (str[j] === bracket[stack.pop()]) continue;
                flag = false;
                break;
            }
        }
        if (!stack.length && flag) cnt++;
    }
    return cnt;
}