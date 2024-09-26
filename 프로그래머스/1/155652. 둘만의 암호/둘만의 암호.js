function solution(s, skip, index) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        let idx = index;
        let charCode = s[i].charCodeAt();
        while (idx > 0) {
            charCode = charCode === 122 ? 97 : charCode += 1;
            if (!skip.includes(String.fromCharCode(charCode))) idx -= 1; 
        }
        result += String.fromCharCode(charCode);
    }
    return result;
}