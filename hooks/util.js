const stateArr = []

function render(parentElement, element) {
    parentElement.appendChild(element)
}

const makeStateSetter = (wrapObj) => {
    
    return (anotherValue) => {
        wrapObj.value = anotherValue
    }
}

function useState(initialValue) {
    const wrapObj = {
        value: initialValue,
    }
    stateArr.push(wrapObj)
    
    return [wrapObj, makeStateSetter(wrapObj)]
}

export {render, useState}