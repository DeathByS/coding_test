function splitIntoChunk(arr, chunk) {
    // 빈 배열 생성
    const result = [];

    for (let index=0; index < arr.length; index += chunk) {
        let tempArray;
        // slice() 메서드를 사용하여 특정 길이만큼 배열을 분리함
        tempArray = arr.slice(index, index + chunk);
        // 빈 배열에 특정 길이만큼 분리된 배열을 추가
        result.push(tempArray);
    }

    return result;
}

function solution(picks, minerals) {
    let answer = 0;

    let pickCount = picks.reduce(( a, c) => {
        return a+c;
    })

    // 다섯개씩 나누기
    let mineralArr = splitIntoChunk(minerals, 5);

    // 다섯개씩 나눈 광물 집합 개수를 곡괭이 개수랑 비교해서, 곡괭이 개수보다 큰 부분을 잘라냄 ( 개수 넘어가면 어차피 못캐니까 )
    if (mineralArr.length > pickCount) {
        mineralArr = mineralArr.slice(0, pickCount);
    }

    //각 광물의 개수 구하기(정렬을 위해)
    let countMineral = mineralArr.map((mineral) => {

        let diaCount = mineral.filter(e => 'diamond' === e).length;
        let ironCount = mineral.filter(e => 'iron' === e).length;
        let stoneCount = mineral.filter(e => 'stone' === e).length;

        return { "DIA" : diaCount, "IRON": ironCount, "STONE": stoneCount };
    });

    // 정렬, 다이아 개수 순서 대로, 다이아 갯수가 같으면 다음 철 갯수로 다중 정렬
    countMineral.sort((a,b) =>  b.DIA - a.DIA  || b.IRON - a.IRON);

    //
    countMineral.map( (mineral) => {

        // 다이아 곡괭이 부터 사용
        if ( picks[0] > 0 ) {
            // 피로도 계산
            answer += ( mineral['DIA'] * 1 + mineral['IRON'] * 1 + mineral['STONE'] * 1);
            // 곡괭이 차감
            picks[0] -= 1;
        } else if ( picks[1] > 0 ) {
            answer += ( mineral['DIA'] * 5 + mineral['IRON'] * 1 + mineral['STONE'] * 1);
            picks[1] -= 1;
        } else {
            answer += ( mineral['DIA'] * 25 + mineral['IRON'] * 5 + mineral['STONE'] * 1);
            picks[2] -= 1;
        }
    })
    
    return answer;
}
