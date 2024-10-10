function solution(X, Y) {
    let str = '';
    for (let i = 0; i < 10; i++) {
        let x = [...X].filter((v) => +v === i).length;
        let y = [...Y].filter((v) => +v === i).length;
        str += String(i).repeat(Math.min(x, y));
    }
    if (str === '') return '-1';
    if (+str === 0) return '0';
    return [...str].sort((a, b) => b - a).join('');
}