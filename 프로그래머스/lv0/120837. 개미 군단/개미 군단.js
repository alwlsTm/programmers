function solution(hp) {
    let ant = parseInt(hp / 5) + parseInt((hp % 5) / 3) + (hp % 5) % 3;
    return ant;
}