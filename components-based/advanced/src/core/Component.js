export default class Component {

    $target
    $props
    $state

    constructor($target, $props) {
        this.$target = $target
        this.$props = $props
        this.setup()
        this.setEvent() // 이벤트 버블링으로 처리
        this.render()
    }

    setup() {}
    
    mounted() {}    // render 이후 추가적인 기능 수행

    template() {
        return ''
    }

    render() {
        this.$target.innerHTML = this.template()
        this.mounted() // render 후에 mounted가 실행된다.
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
        const isTarget = (target) => children.includes(target) || !!target.closest(selector)

        this.$target.addEventListener(eventType, e => {
            if(!isTarget(event.target)) return false
            callback(e)
        })
    }
}
