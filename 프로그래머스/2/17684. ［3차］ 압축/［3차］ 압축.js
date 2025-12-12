function solution(msg) {
    let idx = [];
    let dict = [];
    let alphabet = 'A'.charCodeAt();
    for (let i = 0; i < 26; i++) {
        dict.push(String.fromCharCode(alphabet + i));
    }

    let w = "";
    for (let i = 0; i < msg.length; i++) {
        let c = msg[i];
        if (dict.includes(w + c)) {
            w += c;
        } else {
            idx.push(dict.indexOf(w) + 1);
            dict.push(w + c);        
            w = c;
        }
    }
    if (w.length > 0) idx.push(dict.indexOf(w) + 1);
    return idx;
}