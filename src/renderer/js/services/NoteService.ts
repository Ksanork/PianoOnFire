import EventResponse from "../../../shared/response/EventReponse"
import GetNotesQuery from "../../../shared/query/GetNotesQuery"
import { appConfig } from "../config/AppConfig"
import Note from "../model/Note"
import RenderedNote from "../model/RenderedNote"
import NoteRenderer from "../note_renderer/NoteRenderer"
import RandomUtil from "../util/RandomUtil"

export default class NoteService {

    private notes: Note[]
    private noteRenderer: NoteRenderer = new NoteRenderer(appConfig.staveConfig)
    private currentNote: RenderedNote

    public async fetchNotes(startRange: number, rangeSize: number): Promise<EventResponse<Note[]>> {
        const query: GetNotesQuery = {
            rangeSize: rangeSize,
            startRange: startRange
        }

        return window.pianoApi.getNotes(query)
    }

    private async initNotes() {
        const notesResponse: EventResponse<Note[]> = await this.fetchNotes(4, 2)

        this.notes = notesResponse.result
        console.log(this.notes)

    }

    public async startRecognizing() {
        await this.initNotes()
        // this.startListeningForNote()
        this.nextStep()
    }

    private nextStep() {
        if (this.currentNote != null) {
            this.noteRenderer.clearNote(this.currentNote)
        }

        const randomNote = this.randomNote()
        console.log("random note")
        console.log(randomNote)
        this.currentNote = this.noteRenderer.renderNote(randomNote, 100)
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

    public async renderAllNotes() {
        await this.initNotes()


        let left = 20
        this.notes.forEach((note: Note) => {
            this.noteRenderer.renderNote(note, left)
            left += 50
        })
    }

}