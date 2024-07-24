function solution(s, n) {
    let str = "";
    for (let i = 0; i < s.length; i++) {
        let sASCII = s.charCodeAt(i);
        if (s[i] === " ") str += " ";
        else {
            if (sASCII <= 90) {
                sASCII += n;
                if (sASCII > 90) sASCII -= 26;
            } else {
                sASCII += n;
                if (sASCII > 122) sASCII -= 26; 
            }            
            str += String.fromCharCode(sASCII);
        }
    }
    return str;
}