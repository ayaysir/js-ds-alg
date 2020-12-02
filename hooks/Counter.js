import {useState} from './util.js'

export default function Counter() { 
    const $div = document.createElement('div')
    
    // 초기값 설정
    const [count, setCount] = useState(0)
    
    const $p = document.createElement('p')
    $p.textContent = count.value
    
    const $button = document.createElement("button")
    $button.textContent = "증가"
    
    $button.addEventListener('click', () => {
        setCount(count.value + 1)   // 카운터 값 증가
        console.log(count)
        $p.textContent = count.value    // (!) 값이 바뀔 때 DOM에 직접 접근
    })
    
    $div.appendChild($p)
    $div.appendChild($button)
     
    return $div
}
