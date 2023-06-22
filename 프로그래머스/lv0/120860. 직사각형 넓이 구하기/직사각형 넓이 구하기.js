function solution(dots) {
    let x = dots.sort((a, b) => b[0] - a[0]);
    let width = dots[0][0] - dots[3][0];
    let y = dots.sort((a, b) => b[1] - a[1]);
    let height = dots[0][1] - dots[3][1];
    return width * height;
}