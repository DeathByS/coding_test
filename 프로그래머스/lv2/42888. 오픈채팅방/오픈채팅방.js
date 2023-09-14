function solution(record) {
    
    let chatting = [];

    let lastNickName = new Map();

    record.map((item) => {
        // console.log(item);
        const [ action, userId, nickName ] = item.split(' ');

        if ( action == "Enter" || action == "Leave") {

            // 첫 입장 이후 닉네임이 변경되지 않을 수도 있으므로 입장 시 닉네임은 한번 기록 함
            if ( action == "Enter") {
                lastNickName.set(userId, nickName);
            }

            // 행동과 유저 아이디를 저장
            chatting.push({ action: action, userId: userId });
        } else {
            // Change action이 나왔을 경우, 해당 유저 id에 변경된 닉네임을 다시 저장
            lastNickName.set(userId, nickName);
        }
    })

    const answer = chatting.map((item) => {
        const message = lastNickName.get(item.userId) + '님이 ' + ( item.action == "Enter" ? "들어왔습니다." : "나갔습니다." );
        return message;
    });
    
    return answer;
}