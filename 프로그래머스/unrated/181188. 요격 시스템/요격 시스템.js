function solution(targets) {
    
    targets.sort((a, b) => a[0] - b[0]);

    let answer = 0;
    let bound = 0;
    
    
    for ( let [s, e] of targets ) {
        if( bound > s ) {
            bound = Math.min(bound, e);
        } else {
            bound = e;
            answer++;
        }
    }

    return answer;
}