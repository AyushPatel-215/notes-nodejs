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
const notes = require('./notes.js')

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



yargs.command({
    command:'list',
    discribe:'show list',
    handler(){
        console.log('this is show list');
    }
})
yargs.parse();

// console.log(yargs.argv)

// console.log(process.argv)
