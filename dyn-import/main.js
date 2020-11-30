// import add from './add.js'

//const onClick = e => {
//    import('./add.js').then(obj => {
//        console.log(obj)
//        obj.add()
//    })
//}

const onClick = async e => {
    const module = await import('./add.js')
    module.add()
}

document.getElementById("add-todo").addEventListener("click", onClick)