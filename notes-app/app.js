const notes = require('./notes');

const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

// console.log(getNotes());


// console.log(chalk.red.bold("ERROR~~!!"));

const command = process.argv[2];

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv) {
        // console.log("Title:", argv.title)
        // console.log("Body:", argv.body)
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler() {
        notes.listNotes();
    }
})


yargs.command({
    command: 'read',
    describe: 'read note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})


// console.log(yargs.argv)
yargs.parse();

// if (yargs.argv.command === 'add') {
//     console.log("adding note..")
// } else if (yargs.argv.command === 'remove') {
//     console.log("removing note..")
// }