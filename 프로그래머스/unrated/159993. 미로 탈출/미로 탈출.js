/*
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
    let length = 0;
    let isOpen = false;
    //시작지점을 큐에 넣고 시작
    queue.enqueue([x, y]);

    // 큐가 전부 빌때 까지
    while( !queue.isEmpty()) {
        let [x, y] = queue.dequeue();

        // 레버 위치에 도착했는가? 레버 위치를 시작지점으로 해서 다시 bfs
        if ( map[x][y] === 'L') {
            isOpen = true;
            // visited = Array.from(Array(rowSize), () => new Array(colSize).fill(false));

            // 방문 표시 배열에 시작지점 체크
            visited[x][y] = true;

            // 큐 초기화
            queue = new Queue();

            // length = 0;
        }

        if ( isOpen && map[x][y] === 'E') {
            return length;
        }

        // 상하좌우 탐색
        for ( let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            // 이동할 칸이 X 칸이거나, 맵에서 벗어났거나, 이미 방문했으면 넘김
            if ( nx < 0 || nx >= rowSize || ny < 0 || ny >= colSize) {
                continue;
            } else if ( map[nx][ny] === 'X' ) {
                continue;
            } else if ( visited[nx][ny] ) {
                continue;
            }

            // 처음 방문했다 == false 다 == 방문처리
            if ( visited[nx][ny] == false) {
                visited[nx][ny] = true
                length++;
                queue.enqueue([nx, ny]);
            }
        }
    }
    
    return -1;
    // console.log(visited);
    // console.log(length);
}

function solution(maps) {
    
    let map = new Array();

    maps.forEach((item) => {
        let itemArray = item.split('');
        map.push(itemArray);
    })

    // 배열 크기 확인
    let rowSize = map.length;
    let colSize = map[0].length;

    // 시작 좌표
    let start = [0, 0];

    map.forEach((item, v) => {
        if ( item.includes('S') ) {
            start = [ v, item.indexOf('S')];
        }
    })

    // 방문 표시 배열
    let visited = Array.from(Array(rowSize), () => new Array(colSize).fill(false));

    // 방문 표시 배열에 시작지점 체크
    visited[start[0]][start[1]] = true;

    let result = miro(start[0],start[1], rowSize, colSize, map, visited);
    
    return result;
}
*/

function solution(maps) {
    const MAX_R = maps.length;
    const MAX_C = maps[0].length;
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    let start = [0, 0];
    let queue = new Queue();
    let visited = maps.map((v, row) => {
        if (v.includes('S')) {
            const col = v.indexOf('S');
            start = [row, col];
        }
        return Array.from({ length: v.length }, () => false)
    });

    visited[start[0]][start[1]] = true;
    queue.enqueue({ row: start[0], col: start[1], length: 0, open: false });


    while (!queue.isEmpty()) {
        let { row, col, length, open } = queue.dequeue();
        if (maps[row][col] === 'L') {
            visited = maps.map(v => Array.from({ length: v.length }, () => false));
            visited[row][col] = true;
            open = true;
            queue = new Queue();
        }
        if (open && maps[row][col] === 'E') {
            return length;
        }

        for (let i = 0; i < 4; i++) {
            const nr = row + dy[i];
            const nc = col + dx[i];
            if (nr > -1 && nc > -1 && nr < MAX_R && nc < MAX_C && !visited[nr][nc] && maps[nr][nc] !== 'X') {
                visited[nr][nc] = true;
                queue.enqueue({ row: nr, col: nc, length: length + 1, open });
            }
        }
    }

    return -1;
}

class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(val) {
        this.queue[this.rear++] = val;
    }

    dequeue() {
        const val = this.queue[this.front];
        delete this.queue[this.front++];
        return val;
    }

    isEmpty() {
        return this.rear === this.front;
    }
}
