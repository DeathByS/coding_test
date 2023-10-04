function solution(brown, yellow) {
    
    // x * y = yellow, (x+2) * (y+2) = yellow + brown
    // xy + 2x+ 2y+ 4 = yellow + brown
    // 2(x+y) + 4 = brown
    // y = yellow / x
    // 2(x + yellow / x) + 4 = brown
    // 2x + 2 yellow / x + 4 = brown
    // 2x^2 + 2 yellow + 4x  = brown *x
    // 2x^2 + 4x - brown *x + 2 yellow = 0
    // 2x^2 + x(4-brown) + 2 yellow = 0
    // x = -(4-brown) + root((4-brown)^2 - 4*2*2yellow) / 2*2

    
    let answer = [];
    
    let x = (-1*(4-brown) + Math.sqrt((4-brown)**2 - 16*yellow)) / 4;

    let y = yellow / x;

 
    answer.push(Math.max(x+2, y+2), Math.min(x+2, y+2));
    return answer;
}