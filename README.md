# notes-nodejs

### notes app is made for managing your notes.

## Requirements
- Node is runtime environment use to run this project and node should install in your pc or laptop

## npm

-npm stands for node package manager used for downloading dependencies required for the development.

- To install a dependency having name <package-name> use
  ```sh
  npm install <package-name>
  ```
  
  ## Dependencies
- chalk: Used for styling and coloring console text
- yargs: Used for parsing the command line text and for defining the command and handling the command
- fs:  fileSystem is a core Node module used for accessing, managing and modifying files.

  ## Information about working
- Program starts with app.js file which contains only definitions of command like add, remove, list, read and also defines handler for the command using yargs dependency.
- All the handler code involves code for executing the command using a function and all these functions are present in notes.js. So, 
  ```sh
  const notes = require('notes.js');
  ```
  
  #### addNote(title, body)
- This function will first loads all notes as array and checks using 'title' property after the notes that current note is not duplicate of any existing note.
- If it is found that it is duplicate note, then an Error message 'Note already exits!' else note will be added to notes.json file.
  
  - To add a note,
  ```sh
  node app.js add --title="<title-name>" --body="<body>"
  ```
  
  #### removeNote(title)
- It will load all notes using loadNotes() function. Then checks if there is note whose title matches with title of given note, then it removes it from the notes.json file and if not, then it will print Error message as 'Note not exists!'.
  
  - To remove a note
  ```sh
  node app.js remove --title="<title-name>"
  ```
  
  #### listNotes()
- It will load all notes using loadNotes() function. Then it will print 'Your Notes' in style and then will print tite of all the existing notes.
  
  - To list all the notes
  ```sh
  node app.js list
  ```
  
  #### readNote(title)
- It will loads all notes using loadNotes() function. Then checks if there exits any note which has title equals to current notes' title, if yes,then 
  prints title and body of the note in styled text. If no, print error message 'Note not exists!'.
  
  - To read a specific note,
  ```sh
  node app.js read --title="<title-name>"
  ```
  
  
  
  
  
  
  
  
  
  
  
