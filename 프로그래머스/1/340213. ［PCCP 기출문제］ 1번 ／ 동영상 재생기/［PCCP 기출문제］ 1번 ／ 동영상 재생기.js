function toMinutes(time) {
    const [mm, ss] = time.split(':');
    return +mm * 60 + +ss;
}

function solution(video_len, pos, op_start, op_end, commands) {
    let mVideo = toMinutes(video_len);
    let mPos = toMinutes(pos);
    let mOpStart = toMinutes(op_start);
    let mOpEnd = toMinutes(op_end);
    
    if (mOpStart <= mPos && mPos < mOpEnd) mPos = mOpEnd;
    commands.forEach((v) => {        
        mPos += (v === 'next') ? 10 : -10;
        
        if (mVideo - mPos < 10) mPos = mVideo;

        if (mPos < 10) mPos = 0;
        
        if (mOpStart <= mPos && mPos < mOpEnd) mPos = mOpEnd;  
    });
    
    let m = String(Math.floor(mPos / 60));
    let s = String(mPos % 60);
    return `${m.padStart(2, 0)}:${s.padStart(2, 0)}`;
}