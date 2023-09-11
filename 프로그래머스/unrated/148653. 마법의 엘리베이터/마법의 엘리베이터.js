function solution(storey) {
    let answer = 0;
    while ( storey > 0 ) {
        let num = storey % 10;

        if ( num == 5) {
            if ( (Math.trunc(storey) / 10) % 10 < 5) {
                storey -= 5;
            } else {
                storey += 5;
            }

            answer += 5;
        }

        else if ( num > 5 ) {
            answer = answer + (10 - num);
            storey = storey + (10 - num);

        } else {
            answer = answer + num;
            storey -= num;
        }

        storey = Math.trunc(storey / 10);
    }
    
    return answer;
}