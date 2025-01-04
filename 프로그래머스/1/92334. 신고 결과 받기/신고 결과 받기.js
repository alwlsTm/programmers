function solution(id_list, report, k) {
    let new_report  = [...new Set(report)].map((v) => v.split(' '));
    let cnt = new Map();
    for (let report of new_report) {
        cnt.set(report[1], cnt.get(report[1]) + 1 || 1);
    }
    
    let user = new Map();
    for (let report of new_report) {
        if (cnt.get(report[1]) >= k) {
            user.set(report[0], user.get(report[0]) + 1 || 1);    
        }
    }
    
    let result = id_list.map((v) => user.get(v) || 0);
    return result;
}