class Queue {
    constructor() {
        this.items = [];
    }

    // 큐에 아이템 추가
    enqueue(item) {
        this.items.push(item);
    }

    // 큐에서 아이템 제거 후 반환
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }

    // 큐가 비어있는지 확인
    isEmpty() {
        return this.items.length === 0;
    }

    // 큐의 크기 반환
    size() {
        return this.items.length;
    }

    // 큐의 첫 번째 아이템 반환 (제거하지 않음)
    front() {
        return this.items[0];
    }
}


function miro(x,y,rowSize,colSize,map,visited) {
    // 미로탐색 = bfs
    // 미로에서 이동하기 위한 상하좌우
    let dx = [-1, 1, 0 ,0];
    let dy = [0, 0, -1, 1];

    let queue = new Queue();
    //시작지점을 큐에 넣고 시작
    queue.enqueue([x, y, 0]);

    // 큐가 전부 빌때 까지
    while( !queue.isEmpty()) {
        let [x, y, length] = queue.dequeue();
       
        if (x == rowSize-1 && y == colSize-1 ) {
            
            return length+1;
        }

        // 상하좌우 탐색
        for ( let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            // 이동할 칸이 X 칸이거나, 맵에서 벗어났거나, 이미 방문했으면 넘김
            if ( nx < 0 || nx >= rowSize || ny < 0 || ny >= colSize) {
                continue;
            } else if ( map[nx][ny] === 0 ) {
                continue;
            } else if ( visited[nx][ny] ) {
                continue;
            } else {
                visited[nx][ny] = true
                queue.enqueue([nx, ny, length + 1]);
            }
        }
    }
    return -1;
}


function solution(maps) {

    // 배열 크기 확인
    let rowSize = maps.length;
    let colSize = maps[0].length;
    
    // 방문 표시 배열
    let visited = Array.from(Array(rowSize), () => new Array(colSize).fill(false));

    // 방문 표시 배열에 시작지점 체크
    visited[0][0] = true;
    
    
    var answer = miro(0, 0, rowSize, colSize, maps, visited);
    
    
    return answer;
}