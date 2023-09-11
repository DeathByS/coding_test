function solution(k, tangerine) {

    let answer = 0;
    // tangerine.sort((a,b) => a-b);
    const numberOfTangerine = {};

    tangerine.forEach( (t) => { numberOfTangerine[t] == null ? numberOfTangerine[t] = 1 : numberOfTangerine[t] ++; });

    const tangerineArr = new Array();

    for ( let key in numberOfTangerine ) {
        tangerineArr.push([key, numberOfTangerine[key]]);
    }

    tangerineArr.sort((a,b) => b[1] - a[1]);


    let count = 0;
    for (let tangerine of tangerineArr) {

        if ( k - tangerine[1] <= 0) {
            answer += 1;
            break;
        } else {
            k -= tangerine[1];
            answer++;
        }
    }
    
    return answer;
}