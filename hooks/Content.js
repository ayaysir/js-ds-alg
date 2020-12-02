export default function Content() { 
    const $div = document.createElement('div')
    
    $div.textContent = "사용법: [증가] 버튼을 누르면 숫자가 증가합니다."
    
    return $div
}
