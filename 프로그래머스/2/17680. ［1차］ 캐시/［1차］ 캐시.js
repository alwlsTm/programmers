function solution(cacheSize, cities) {
    let cache = [];
    let time = 0;
    for (let i = 0; i < cities.length; i++) {
        let city = cities[i].toLowerCase();
        if (!cacheSize) return cities.length * 5;
        if (cache.includes(city)) {
            let idx = cache.indexOf(city);
            cache.splice(idx, 1);
            cache.push(city);
            time++;
        } else {
            if (cache.length === cacheSize) {
                cache.shift();
                cache.push(city);
            } else {
                cache.push(city);
            }
            time += 5;
        }
    }
    return time;
}