function solution(new_id) {
    let lv1 = new_id.toLowerCase();
    let lv2 = lv1.replace(/[^a-z0-9-_.]/g, '');
    let lv3 = lv2.replace(/\.+/g, '.');
    let lv4 = lv3.replace(/^\.|\.$/g, '');
    let lv5 = lv4.replace(/^$/, 'a');
    let lv6 = lv5.slice(0, 15).replace(/\.$/, '');
    return lv6.length <= 2 ? lv6 + lv6.slice(-1).repeat(3 - lv6.length) : lv6;
}