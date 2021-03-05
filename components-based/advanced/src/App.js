import Component from "./core/Component.js"
import Item from "./components/Item.js"
import ItemAppender from "./components/ItemAppender.js"
import ItemFilter from "./components/ItemFilter.js"

export default class App extends Component {
    setup() {
        // 상태를 최상위 컴포넌트에서 관리하는 것이 좋다.
        this.$state = {
            filterCategory: 0,
            items: [{
                seq: 1, contents: 'item1', active: false
            }, {
                seq: 2, contents: 'item2', active: true
            }]
        }
    }
    
    template() {
        return `
            <header data-component="item-appender"></header>
            <main data-component="items"></main>
            <footer data-component="item-filter"></main>
        `
    }
    
    mounted() {
        const { filteredItems, addItem, deleteItem, toggleItem, filterItem } = this // App 클래스
        const $itemAppender = this.$target.querySelector(`[data-component="item-appender"]`)
        const $items = this.$target.querySelector(`[data-component="items"]`)
        const $itemFilter = this.$target.querySelector(`[data-component="item-filter"]`)
        
        // $target, $props
        new ItemAppender($itemAppender, {
            addItem: addItem.bind(this)
        })
        new Item($items, {
            filteredItems,
            deleteItem: deleteItem.bind(this),
            toggleItem: toggleItem.bind(this)
        })
        new ItemFilter($itemFilter, {
            filterItem: filterItem.bind(this)
        })
    }
    
    get filteredItems() {
        const { filterCategory, items } = this.$state
        return items.filter(({ active }) => (filterCategory === 1 && active) || (filterCategory === 2 && !active) || filterCategory === 0)
    }
    
    // 이벤트 콜백 함수는 상위 컴포넌트에서 작성하고, 이벤트 트리거는 해당 하위 컴포넌트에서 수행
    addItem(contents) {
        const { items } = this.$state
        const seq = Math.max(0, ...items.map(item => item.seq)) + 1
        const active = false
        this.setState({
            items: [
                ...items,
                { seq, contents, active }
            ]
        })
    }

    deleteItem(seq) {
        const { items } = this.$state
        items.splice(items.findIndex(item => item.seq === seq), 1)
        this.setState({ items })
    }

    toggleItem(seq) {
        const { items } = this.$state
        const index = items.findIndex(item => item.seq === seq)
        items[index].active = !items[index].active
        this.setState({ items })
    }

    filterItem(filterCategory) {
        this.setState({ filterCategory })
    }
    
}

