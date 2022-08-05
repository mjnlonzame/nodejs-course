const fs = require('fs')
const chalk = require('chalk');

const getNotes = function () {
    return "Your notes...";
}

const addNote = function (title, body) {
    const notes = loadNotes();
    console.log(notes)
    if (notes.some(note => note.title === title)) {
        console.log(`Note's title is taken`);
    } else {

        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
    }

}

const removeNote = function (title) {
    console.log(title)
    const notes = loadNotes();
    const filteredNotes = notes.filter(note => note.title !== title);
    saveNotes(filteredNotes);

    if (notes.length > filteredNotes.length)
        console.log(chalk.green.inverse('notes removed!'))
    else
        console.log(chalk.red.inverse('no note found!'))

}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJsON);
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (e) {
        return [];
    }

}

const listNotes = () => {
    console.log(chalk.inverse.green("Your notes"))
    const notes = loadNotes();
    notes.forEach(note => console.log(note.title));

}


const readNote = (title) => {

    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    debugger
    if (note) {
        console.log(chalk.inverse.green(title))
        console.log(note.body)
    } else {
        console.log(chalk.inverse.red(`Note not found with a title: ${title}`));
    }

}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
};