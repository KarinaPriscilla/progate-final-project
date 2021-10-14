// set trigger submit on enter
const inputTask = document.getElementById('inputTask')
inputTask.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        document.getElementById('btnAdd').click()
    }
})

// ! to-do list
const list = document.getElementById('list')

const add = () => {
    const task = document.createElement('section')
    task.className = 'task'

    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('id', 'task')

    const remove = document.createElement('button')
    remove.setAttribute('id', 'btnRemove')
    remove.setAttribute('onclick', 'remove()')

    const iRemove = document.createElement('i')
    iRemove.setAttribute('class', 'fas fa-check-circle')
    remove.append(iRemove)

    if (inputTask.value !== '') {
        input.value = inputTask.value
        inputTask.value = ''
        task.append(input)
        task.append(remove)
    }
    list.append(task)
}

const remove = () => {
    const heading = document.getElementById('fin').style.display = 'block'
    const task = document.getElementsByClassName('task')[0]
    task.remove()
    const done = document.getElementById('done')
    const item = document.createElement('li')
    if(item.value !== '') {
        done.append(item)
    }
    const finished = task.getElementsByTagName('input')[0].value
    item.setAttribute('class', 'strike')
    item.append(finished)
}
