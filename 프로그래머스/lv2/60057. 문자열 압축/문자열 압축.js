function solution(s) {
    let answer = s.length;
    // 주어진 단어의 절반만큼, 그 이상으로 비교는 의미가 없다.
    for (let i = 1; i <= s.length / 2; i++) {
        let repeatWord = '';
        let resultWord = '';
        let repeatCount = 0;
        // 단어에 포함되는 글자 수를 늘려가면서 비교
        for (let start = 0; start < s.length; start += i) {
            let currentWord = s.substring(start, start + i);
            // 비교 첫 시작 일 때 반복할 단어 세팅
            if ( repeatWord == '' ) {
                repeatWord = currentWord;
                repeatCount = 1;
            } else if ( repeatWord === currentWord ) {
                // 반복 단어와 현재 단어가 같을 때 = 카운트 증가
                repeatCount ++;
            } else {
                // 반복 단어가 현재 단어와 같지 않을 때
                if ( repeatCount > 1) {
                    // 2번 이상 단어가 반복 됐을때 (ex aaabbc ) 반복 횟수 + 반복된 단어로 만들어 줌
                    resultWord += repeatCount + repeatWord; //
                } else {
                    // 단어가 한번만 나왔을 떼
                    resultWord += repeatWord;
                }
                // 단어가 반복 되지 않으므로, 다음번 비교부터는 현재 단어로 바꾸어 비교, 카운트도 초기화
                repeatWord = currentWord;
                repeatCount = 1;
            }
        }
        if (repeatCount > 1) {
            resultWord += repeatCount + repeatWord;
        } else {
            resultWord += repeatWord;
        };

        // 이전에 만들어진 단어 길이와 현재 단어 길이를 비교해서, 더 작은게 정답
        answer = Math.min(answer, resultWord.length);
    }

    return answer;
}