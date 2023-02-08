// const fs = require('fs')
// // fs.writeFileSync('note.txt','hello my name is ayush patel','append')

// fs.appendFileSync('note.txt', ' i am live n mehsana' );


const str = require('./util.js');
const chalk = require('chalk');
const { argv } = require('process');

// console.log("app.js") 
// console.log(str(3,6));
// console.log(chalk.green.bold('sucess!.'))
// console.log(argv[2])


const yargs = require('yargs')
const notes = require('./notes.js');
const { command } = require('yargs');

yargs.version('1.1.0');

//creating command
yargs.command({
    command:'add',
    discribe:'adding a note',
    bulider:{
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'note body',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv) {
        console.log(argv.title);
        notes.addNotes(argv.title,argv.body);
    }
})


// remove command
yargs.command({
    command : 'remove',
    discribe: 'remove the note',
    bulider: {
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }   
    },
    handler(argv){
        console.log(argv.title);
        notes.removeNote(argv.title)
    }
})

// read command
yargs.command({
    command:'read',
    discribe:'read notes',
    bulider:{
        title:{
            describe:'read note',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})



// show list title command
yargs.command({
    command:'list',
    discribe:'show list',
    handler(){
        notes.showNotes()
    }
})
yargs.parse();

// console.log(yargs.argv)
// console.log(process.argv)
