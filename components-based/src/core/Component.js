export default class Component {

    $target
    $state

    constructor($target) {
        this.$target = $target
        this.setup()
        this.setEvent() // 이벤트 버블링으로 처리
        this.render()
    }

    setup() {}

    template() {
        return ''
    }

    render() {
        this.$target.innerHTML = this.template()
    }

    setEvent() {}

    setState(newState) {
        this.$state = {
            ...this.$state,
            ...newState
        }
        this.render()
    }
    
    addEvent(eventType, selector, callback) {
        const children = [...this.$target.querySelectorAll(selector)]
        const checkTarget = (target) => children.includes(target) || target.closest(selector)

        this.$target.addEventListener(eventType, e => {
            if(!checkTarget(event.target)) return false
            callback(e)
        })
    }
}
