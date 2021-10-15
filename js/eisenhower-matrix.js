const inputTask = document.getElementById('inputTask')
let i = 1
const bdo = () => {
    let iDo = document.getElementById('iDo' + i.toString())
    if (inputTask.value !== '') {
        iDo.value = inputTask.value
        inputTask.value = ''
        i++
    }
    if (i === 7) {
        i = 1
    }
}

let j = 1
const bdecide = () => {
    let iDec = document.getElementById('iDec' + j.toString())
    if (inputTask.value !== '') {
        iDec.value = inputTask.value
        inputTask.value = ''
        j++
    }
    if (j === 7) {
        j = 1
    }
}

let k = 1
const bdelegate = () => {
    let iDeg = document.getElementById('iDeg' + k.toString())
    if (inputTask.value !== '') {
        iDeg.value = inputTask.value
        inputTask.value = ''
        k++
    }
    if (k === 7) {
        k = 1
    }
}

let l = 1
const bdelete = () => {
    let iDel = document.getElementById('iDel' + l.toString())
    if (inputTask.value !== '') {
        iDel.value = inputTask.value
        inputTask.value = ''
        l++
    }
    if (l === 7) {
        l = 1
    }
}
