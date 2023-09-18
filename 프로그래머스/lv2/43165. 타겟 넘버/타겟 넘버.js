class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(elem) {
        this.items.push(elem);
    }

    dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function search(numbers, target) {
    const queue = new Queue();
    let list = [];
    let answer = 0;
    queue.enqueue([numbers[0], -numbers[0]]);

    for (let i = 1; i < numbers.length; i++) {
        list = queue.dequeue();

        let newItem = [];
        for (let num of list) {
            newItem.push(num + numbers[i]);
            newItem.push(num - numbers[i]);
        }
        queue.enqueue(newItem);
    }
    list = queue.dequeue();
    list.map((it) => {
        if (it == target) {
            answer++;
        }
    })

    return answer;
}

function solution(numbers, target) {
    let answer = 0;
    answer = search(numbers, target);
    return answer;
}