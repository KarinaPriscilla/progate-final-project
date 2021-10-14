const add = () => {
    const memos = document.getElementById('memos')
    const memo = document.getElementsByClassName('memo')[0]
    const note = document.createElement('textarea')
    note.setAttribute('id', 'note')
    note.setAttribute('cols', '20')
    note.setAttribute('rows', '10')
    memo.append(note)
    memos.append(memo)
}
