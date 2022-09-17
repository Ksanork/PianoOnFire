import { Note } from "./model/Note";
import NotesGenerator from "./util/NotesGenerator";

export default class NoteRecognizer {

    private notes: Note[]

    constructor() {
        this.notes = NotesGenerator.generateNotes()
    }

    public recognizeNoteFromMidi(midiValue: number): Note | undefined {
        return this.notes.find((note) => note.value == midiValue)
    }
}