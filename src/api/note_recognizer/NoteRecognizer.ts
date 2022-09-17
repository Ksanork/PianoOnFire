import { Note } from "./model/Note";
import NotesGenerator from "./util/NotesGenerator";
var easymidi = require('easymidi');
export default class NoteRecognizer {

    private notes: Note[]

    constructor() {
        this.notes = NotesGenerator.generateNotes()
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
        });
    }
}