class MinHeap {
    constructor(obj) {
        this.heapArr = []
        this.heapArr[0] = null
        this.heapArr[1] = obj
    }
    
    
    insert(obj) {
        if (this.heapArr.length == 0) {
            this.heapArr.push(obj)
            return true
        }
        
        this.heapArr.push(obj)
        const insertedIndex = this.heapArr.length - 1
        
        console.log(insertedIndex)
        
    }
}