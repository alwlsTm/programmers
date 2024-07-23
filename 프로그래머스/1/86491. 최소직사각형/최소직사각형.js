function solution(sizes) {
    let arr = sizes.map((v, i) => {
		return v[1] > v[0] ? v.reverse() : v
    });
    let w = Math.max(...arr.map((v) => v[0]));
    let h = Math.max(...arr.map((v) => v[1]));
    return w * h;
}