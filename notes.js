const fs = require('fs');
const { get } = require('https');
const chalk = require('chalk');

const getNotes = () => {
    return 'Your Notes..'
}

const addNotes = function(title,body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title)
    
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

const saveNotes = (notes) => {
    const dataBuffer = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataBuffer);
}

const loadNotes = () => {
    try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataStr = dataBuffer.toString();
    const data = JSON.parse(dataStr);
    // console.log(data.title);
    // console.log(data.body);
    return data;
    }
    catch(e){
        return []
    }
}

module.exports = {
    addNotes : addNotes,
    getNotes : getNotes,
    removeNote: removeNote
}