import Component from "./../core/Component.js"

export default class Item extends Component {
    
    setup() {
        this.$state = {
            items: ["item1", "item2"]
        }
    }
    
    template() {
        const { items } = this.$state
        return `<button class="btn-add">추가</button><ul>${items.map((item, key) => `<li>${item}</li><button class="btn-delete" data-index=${key}>삭제</button>`).join("")}</ul>`
    }
    
    setEvent() {
//        this.$target.querySelector(".btn-add").addEventListener("click", e => {
//            const { items } = this.$state
//            this.setState({
//                items: [...items, `item${items.length + 1}`]
//            })
//        })
//        
//        this.$target.querySelectorAll(".btn-delete").forEach(deleteBtn => {
//            deleteBtn.addEventListener("click", ({target}) => {
//                const items = [...this.$state.items]
//                items.splice(target.dataset.index, 1)
//                this.setState({ items })
//            })
//        })
        
        // 이벤트 버블링 - 모든 이벤트를 this.$target에 등록하여 사용하면 된다.
//        this.$target.addEventListener("click", ({ target }) => {
//
//            const { items } = this.$state
//            
//            if(target.classList.contains("btn-add")) {
//                this.setState({
//                    items: [...items, `item${items.length + 1}`]
//                })    
//            }
//            
//            if(target.classList.contains("btn-delete")) {
//                items.splice(target.dataset.index, 1)
//                this.setState({ items })
//            }
//            
//        })
        
        // this.addEvent 사용
        this.addEvent("click", ".btn-add", ({target}) => {
            const { items } = this.$state
            this.setState({
                items: [...items, `item${items.length + 1}`]
            })  
        })
        
        this.addEvent("click", ".btn-delete", ({target}) => {
            const { items } = this.$state
            items.splice(target.dataset.index, 1)
            this.setState({items})  
        })
    }
}
