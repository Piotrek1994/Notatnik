const addBtn = document.querySelector('.add')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const deleteBtns = document.getElementsByClassName('.delete-note')
const deleteAllBtn = document.getElementsByClassName('.delete-all')
const noteArea = document.querySelector('.note-area')
const notePanel = document.querySelector('.note-panel')
const category = document.querySelector('#category')
const textArea = document.querySelector('#text')
const error = document.querySelector('.error')

let selectedValue
let cardID = 0




const openPanel = () => {
    notePanel.style.display = 'flex'
}

const closePanel = () => {
    notePanel.style.display = 'none'
    error.style.visbility = 'hidden'
    textArea.value = ''
    category.selectedIndex = 0
}


const addNote = () => {
    if (textArea.value !== '' && category.value !== 0) {
        error.style.visibility = 'hidden'

    } else {
        error.style.visibility = 'visible'
    }
}









saveBtn.addEventListener('click', addNote)
cancelBtn.addEventListener('click', closePanel)
addBtn.addEventListener('click', openPanel)
