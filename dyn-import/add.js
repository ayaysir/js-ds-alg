let currentIdx = 1

export function add() {
    const $ul = document.getElementById("todo-list")
    const $li = document.createElement("li")
    $li.textContent = `할 일 ${currentIdx++}`
    $ul.appendChild($li)
    
}