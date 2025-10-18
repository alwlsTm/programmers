function solution(str1, str2) {
    function slice_Str(string) {
        let arr = [];
        let str = string.toLowerCase();
        for (let i = 0; i < str.length; i++) {
            let slc = str.slice(i, i + 2);
            if (/^[a-z]{2}/.test(slc)) arr.push(slc);
        }
        return arr;
    }
    let s1 = slice_Str(str1);
    let s2 = slice_Str(str2);
    let set = new Set([...s1, ...s2]);
    
    let inter = 0;
    let union = 0;
    set.forEach((v) => {
        let cnt1 = s1.filter((a) => a === v).length;
        let cnt2 = s2.filter((b) => b === v).length;
        inter += Math.min(cnt1, cnt2);
        union += Math.max(cnt1, cnt2);
    });
    return !union ? 65536 : Math.floor((inter/union) * 65536);
}