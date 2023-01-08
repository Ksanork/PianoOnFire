import { appConfig } from "../config/AppConfig"
import GetNotesQuery from "../model/GetNotesQuery"
import Note from "../model/Note"
import RenderedNote from "../model/RenderedNote"
import StaveConfig from "../model/StaveConfig"
import NoteRenderer from "../note_renderer/NoteRenderer"
import RandomUtil from "../util/RandomUtil"
import StylesVarUtil from "../util/StylesVarUtil"

export default class NoteService {

    private notes: Note[]
    private noteRenderer: NoteRenderer = new NoteRenderer(appConfig.staveConfig)
    private currentNote: RenderedNote

    public async fetchNotes(startRange: number, rangeSize: number): Promise<Note[]> {
        const query: GetNotesQuery = {
            rangeSize: rangeSize,
            startRange: startRange
        }

        return window.pianoApi.getNotes(query)
    }

    public async startRecognizing() {
        this.notes = await this.fetchNotes(4, 2)
        this.startListeningForNote()
        this.nextStep()
    }

    private nextStep() {
        if (this.currentNote != null) {
            this.noteRenderer.clearNote(this.currentNote)
        }

        const randomNote = this.randomNote()
        console.log("random note")
        console.log(randomNote)
        this.currentNote = this.noteRenderer.renderNote(randomNote)
    }

    private checkNote(pressedNote: Note) {
        console.log("check note")
        console.log(pressedNote)
        console.log(this.currentNote)
        return pressedNote.value == this.currentNote.note.value
    }

    private startListeningForNote() {
        console.log("startListening")
        window.pianoApi.onNotePressed((event: any, value: any) => {
            console.log("onNotePressed")
           if (this.checkNote(value)) {
            this.nextStep()
           }
        })
    }

    private randomNote() {
        return this.notes[RandomUtil.randFrom(0, this.notes.length - 1)]
    }

}