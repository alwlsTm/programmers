function solution(wallpaper) {
    let [x1, y1, x2, y2] = [wallpaper.length, wallpaper[0].length, 0, 0];
    wallpaper.forEach((x, xi) => {
        [...x].forEach((y, yi) => {
            if (y.includes('#')) {
                x1 = Math.min(xi, x1);
                y1 = Math.min(yi, y1);
                x2 = Math.max(xi, x2);
                y2 = Math.max(yi, y2);
            }
        });
    });
    return [x1, y1, x2 + 1, y2 + 1];
}