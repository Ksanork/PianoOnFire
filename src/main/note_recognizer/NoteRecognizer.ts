import { BrowserWindow } from "electron";
import { Note } from "./model/Note";
import NotesGenerator from "./util/NotesGenerator";
// var easymidi = require('easymidi');
import easymidi from "easymidi"

export default class NoteRecognizer {

    private notes: Note[]
    private mainWindow: BrowserWindow

    constructor(mainWindow: BrowserWindow) {
        this.notes = NotesGenerator.generateAllNotes()
        this.mainWindow = mainWindow
    }

    public recognizeNoteFromMidi(midiValue: number): Note | undefined {
        return this.notes.find((note) => note.value == midiValue)
    }

    public startRecognizing() {
        const input = new easymidi.Input('DigitalKBD-1');
        console.log("start recognizing")
        const self = this
        input.on('noteon', function (msg: any) {
            console.log(msg);
            const note: Note = self.recognizeNoteFromMidi(msg.note)!
            console.log(note)

            // self.mainWindow.webContents.send("pianoEvent:onNotePressed", note)
            self.mainWindow.webContents.send("pianoEvent:onNotePressed", note)
        });
    }
}