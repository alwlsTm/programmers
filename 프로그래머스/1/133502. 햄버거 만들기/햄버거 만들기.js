function solution(ingredient) {
    let cnt = 0;
    let arr = [];
    ingredient.forEach((v) => {
        arr.push(v);
        if (arr.slice(-4).join('') === '1231') {
            cnt++;
            arr.splice(-4);
        }
    }); 
    return cnt;
}