class Heap {
    constructor(num, category) {
        this.heapArr = []
        this.heapArr[0] = null
        if(num) {
            this.heapArr[1] = num
        }
        this.category = category || "max"
    }

    getList() {
        return this.heapArr.slice(1)
    }
    
    getSize() {
        return this.heapArr.slice(1).length
    }
    
    isEmpty() {
        return this.heapArr.slice(1).length == 0
    }

    swap(idx1, idx2) {
        const temp = this.heapArr[idx1]
        this.heapArr[idx1] = this.heapArr[idx2]
        this.heapArr[idx2] = temp
    }

    // 최소 힙의 경우, 위의 노드보다 아래 노드가 크면 안됨(아래 노드가 작은 경우 true)
    // 최대 힙의 경우. 위의 노드보다 아래 노드가 작으면 안됨(아래 노드가 큰 경우 true)
    isNeedSwap(idxHigh, idxLow) {
        const heap = this.heapArr
        if (this.category == "min") {
            if (heap[idxHigh] > heap[idxLow]) {
                return true
            } else {
                return false
            }
        } else if (this.category == "max") {
            if (heap[idxHigh] < heap[idxLow]) {
                return true
            } else {
                return false
            }
        }

    }

    insert(num) {
        if (this.heapArr.length == 1) {
            this.heapArr[1] = num
            return true
        } else if (this.heapArr.indexOf(num) != -1) {
            console.error("이미 존재하는 숫자입니다.")
            return false
        }

        this.heapArr.push(num)

        // 배열 재정렬
        let insertedIndex = this.heapArr.length - 1

        do {
            const parentIndex = parseInt(insertedIndex / 2)

            if (parentIndex == 0) {
                break
            }

            if (this.isNeedSwap(parentIndex, insertedIndex)) {
                this.swap(parentIndex, insertedIndex)
                insertedIndex = parentIndex
            } else {
                break
            }


        } while (true);
        return true
    }

    pop() {
        if (this.heapArr.length <= 1) {
            return null
        }

        const popped = this.heapArr[1]
        this.swap(1, this.heapArr.length - 1)
        this.heapArr.pop()

        // 배열 재정렬
        let poppedIndex = 1
        let leftChildIndex, rightChildIndex

        do {
            // 자식들은 poppedIndex가 갱신될때마다 재지정해야함
            leftChildIndex = parseInt(poppedIndex * 2)
            rightChildIndex = parseInt(poppedIndex * 2 + 1)

            // case1: 왼쪽 자식 노드도 없을 때 - 자식 노드가 존재할 수 없음
            const heap = this.heapArr
            const heapSize = this.heapArr.length
            if (leftChildIndex >= heapSize) {
                break
            } else if (rightChildIndex >= heapSize) {
                // case2: 오른쪽 자식 노드만 없을 때 - 왼쪽은 있을 때
                if (this.isNeedSwap(poppedIndex, leftChildIndex)) {
                    this.swap(poppedIndex, leftChildIndex)
                } else {
                    break
                }
            } else {
                // case3: 왼쪽, 오른쪽 자식 노드 모두 있을 때
                if (this.isNeedSwap(rightChildIndex, leftChildIndex)) {
                    if (this.isNeedSwap(poppedIndex, leftChildIndex)) {
                        this.swap(poppedIndex, leftChildIndex)
                        poppedIndex = leftChildIndex
                    } else {
                        break
                    }
                } else {
                    if (this.isNeedSwap(poppedIndex, rightChildIndex)) {
                        this.swap(poppedIndex, rightChildIndex)
                        poppedIndex = rightChildIndex
                    } else {
                        break
                    }
                }
            }
        } while (true);

        return popped

    }

}

class MinHeap extends Heap {
    constructor(num) {
        super(num, "min")
    }
}

class MaxHeap extends Heap {
    constructor(num) {
        super(num, "max")
    }
}

// test

const HEAP_DEBUG = false
HEAP_DEBUG && (_ => {
    const heap = new MinHeap()
    heap.insert(7)
    heap.insert(3)
    heap.insert(4)
    console.log("pop", heap.getList(), heap.pop(), heap.insert(6), heap.insert(15), heap.getList(), heap.pop(), heap.getList(), heap.pop(), heap.getList())

})();
    
