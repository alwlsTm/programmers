function solution(phone_book) {
    let hash = {};
    for (let phone of phone_book) {
        hash[phone] = true;
    }
    
    for (let i = 0; i < phone_book.length; i++) {
        for (let j = 1; j < phone_book[i].length; j++) {
            let slc = phone_book[i].slice(0, j);
            if (hash[slc]) return false;
        }
    }
    return true;
}