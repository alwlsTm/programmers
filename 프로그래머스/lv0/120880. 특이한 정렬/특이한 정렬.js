function solution(numlist, n) {
    return numlist.sort((a, b) => {
        let adif = Math.abs(a - n);
        let bdif = Math.abs(b - n);
        if (adif === bdif) return b - a;
        return adif - bdif;
    });
    
}