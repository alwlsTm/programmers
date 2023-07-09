function solution(spell, dic) {
    let arr = [];
    for (let i = 0; i < dic.length; i++) {
        let cnt = 0;
        for (let j = 0; j < spell.length; j++) {
            if (dic[i].includes(spell[j])) cnt++;
        }
        if (cnt === spell.length) arr.push(i);
    }
    return arr.length === 0 ? 2 : 1;
}