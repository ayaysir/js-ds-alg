import Component from "./../core/Component.js"

export default class ItemAppender extends Component {
    template() {
        return `<input type="text" class="appender" placeholder="아이템 내용 입력">`
    }
    
    setEvent() {
        const { addItem } = this.$props
        // 이벤트 콜백 함수는 App에서 정의하고, 이벤트 배정은 여기서?
        this.addEvent("keyup", ".appender", ({ key, target }) => {
            if(key !== "Enter") return
            addItem(target.value)
        })
    }
}