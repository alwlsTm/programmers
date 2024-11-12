function solution(today, terms, privacies) {
    let result = [];
    let now = new Date(today);
    let termsType = {};
    terms.forEach((v, i) => {
        let [type, term] = v.split(' ');
        termsType[type] = +term;
    });
    
    privacies.forEach((v, i) => {
        let [date, type] = v.split(' ');
        let pDate = new Date(date);
        pDate.setMonth(pDate.getMonth() + termsType[type]);
        if (pDate <= now) result.push(i + 1);
    });
    return result;
}