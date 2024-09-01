function solution(a, b) {
    let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let date = new Date(2016, a - 1, b).getDay();
    return week[date];
}