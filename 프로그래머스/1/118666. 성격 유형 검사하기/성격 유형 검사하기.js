function solution(survey, choices) {
    let result = '';
    let types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
    survey.forEach((v, i) => {
        let [left, right] = v.split('');
        let score = Math.abs(choices[i] - 4);
            if (choices[i] < 4) {
                types[left] += score;
            } else if (choices[i] > 4) {
                types[right] += score;
            }    
    });
    
    let type = Object.keys(types);
    for (let i = 0; i < type.length; i += 2) {
        if (types[type[i]] >= types[type[i + 1]]) {
            result += type[i];
        } else {
            result += type[i + 1];
        }
    }
    return result;
}