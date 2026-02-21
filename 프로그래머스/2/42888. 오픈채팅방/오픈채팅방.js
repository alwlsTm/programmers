function solution(record) {
    let arr = [];
    let user = new Map();
    let rec = record.map((v) => v.split(' '));
    
    for (let [inout, uid, name] of rec) {
        if (name) user.set(uid, name);
        if (inout !== 'Change') arr.push([inout, uid]);
    }
    
    return arr.map(([inout, uid]) => {
        return `${user.get(uid)}${inout === 'Enter' ? '님이 들어왔습니다.' : '님이 나갔습니다.'}`;
    })
}