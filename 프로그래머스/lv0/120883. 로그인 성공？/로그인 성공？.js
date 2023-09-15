function solution(id_pw, db) {
    for (let i = 0; i < db.length; i++) {
        let id_check = db[i][0] === id_pw[0];
        
        if (id_check && db[i][1] === id_pw[1]) {
            return "login";
        }
        
        if (id_check && db[i][1] !== id_pw[1]) {
            return "wrong pw";
        }
    }
    return "fail";
}