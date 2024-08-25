function solution(name, yearning, photo) {
    let score = [];
    for (let i = 0; i < photo.length; i++) {
       let points = 0;
       for (let j = 0; j < photo[i].length; j++) {
           let idx = name.indexOf(photo[i][j]);
           points += idx !== -1 ? yearning[idx] : 0;
       }
       score.push(points);
    }
    return score;
    
}