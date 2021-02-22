import Component from "./../core/Component.js"
import Item from "./Item.js"

class App {
    constructor($target) {
        this.$target = $target
        new Item(this.$target)
    }
}

new App(document.querySelector("#app"))
