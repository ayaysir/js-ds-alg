import Component from "./../core/Component.js"

export default class ItemFilter extends Component {
    template() {
        return `
            <button class="filter-btn" data-filter-category="0">전체 보기</button>
            <button class="filter-btn" data-filter-category="1">활성 보기</button>
            <button class="filter-btn" data-filter-category="2">비활성 보기</button>
        `
    }
    
    setEvent() {
        const { filterItem } = this.$props
        this.addEvent("click", ".filter-btn", ({ target }) => {
            filterItem(Number(target.dataset.filterCategory))
        })
    }
}