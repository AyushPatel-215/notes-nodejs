const fs = require('fs');
const { get } = require('https');
const chalk = require('chalk');

const getNotes = () => {
    return 'Your Notes..'
}

const addNotes = function(title,body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title)

    debugger
    
    console.log("value of match string: "+duplicateNotes.length)
    if (duplicateNotes.length ===0)
    {    
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes);
        console.log('new note add!..')
    }
    else{
        console.log("Note title taken!..")
    }
}

const removeNote = function(title){
    const notes = loadNotes();
    const remindNote = notes.filter((note) => note.title !== title)
    console.log(title);
        
    if(notes.length > remindNote.length){
        console.log(chalk.red.inverse("note delete sucessfully.."))
        saveNotes(remindNote)
    }else{
        console.log(chalk.green.inverse("title is not found.."))
    }
} 

// write in json file
const saveNotes = (notes) => {
    const dataBuffer = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataBuffer);
}

// fetching data from json file
const loadNotes = () => {
    try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataStr = dataBuffer.toString();
    const data = JSON.parse(dataStr);
    return data;
    }
    catch(e){
        return []
    }
}

const showNotes = () =>{
    console.log(chalk.inverse("this is your all notes.."))
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNotes = (title) =>{
    
    const notes = loadNotes()
    try{
    const note = notes.find( (not) => not.title === title)
    console.log(chalk.inverse("read your notes "+note.title))

    if(note!=undefined){
        console.log(chalk.yellow.inverse(note.title))
        console.log(note.body)
    }
    }catch(e){console.log(chalk.red("note is note found"))}


}

module.exports = {
    addNotes : addNotes,
    getNotes : getNotes,
    removeNote: removeNote,
    showNotes: showNotes,
    readNotes: readNotes
} 