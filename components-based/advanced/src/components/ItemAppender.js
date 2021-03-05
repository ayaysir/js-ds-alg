import Component from "./../core/Component.js"

export default class ItemAppender extends Component {
    template() {
        const { inputItemName } = this.$props
        return `<input type="text" class="appender" placeholder="아이템 내용 입력" value=${inputItemName}><button class="btn-appender">추가</button>`
    }
    
    setEvent() {
        const { addItem } = this.$props
        
        const doAppend = ({key, target}) => {
            const appender = document.querySelector(".appender")
            if(event.key && event.key !== "Enter") return
            addItem(appender.value)
        }
        
        this.addEvent("keyup", ".appender", doAppend)
        this.addEvent("click", ".btn-appender", doAppend)
        
    }
}