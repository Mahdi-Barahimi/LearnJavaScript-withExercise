const $ = document;
const inputNote = $.getElementById('input-field');
const colorBox = $.querySelectorAll('.color-box');
const saveBtn = $.getElementById('btn-save');
const deleteBtn = $.getElementById('btn-delete');
const listed = $.getElementById('listed');
let cardNote = $.querySelectorAll('.card');
colorBox.forEach(function (color) {
    color.addEventListener('click', function () {
        inputNote.style.backgroundColor = color.style.backgroundColor;
    })
})
function clearInput() {
    inputNote.value = "";
    inputNote.style.backgroundColor = '#fff';
}
function addNote() {
    if (inputNote.value) {
        let newNoteP = $.createElement('p');
        newNoteP.className = 'card-text p-3';
        newNoteP.innerHTML = inputNote.value;
        newNoteP.style.backgroundColor = inputNote.style.backgroundColor;
        let newNoteDiv = $.createElement('div');
        newNoteDiv.className = 'card shadow-sm rounded';
        newNoteDiv.appendChild(newNoteP);
        listed.appendChild(newNoteDiv);
        clearInput();
        cardNote = $.querySelectorAll('.card');
        newNoteDiv.addEventListener('click', removeNote)
    }
}
function removeNote(event) {
    event.target.parentElement.remove();
}
saveBtn.addEventListener('click', addNote);
deleteBtn.addEventListener('click', clearInput)
$.body.addEventListener('keydown', function (event) {
        if(event.key === 'Enter') {
            addNote();
        }
})