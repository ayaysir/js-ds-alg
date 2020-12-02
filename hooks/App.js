import {render} from './util.js'

import HeadTitle from './HeadTitle.js'
import Content from './Content.js'
import Counter from './Counter.js'

export default function App() {
    
    const $div = document.createElement('div')
    
    render($div, HeadTitle())
    render($div, Content())
    render($div, Counter())
    
    return $div
}
