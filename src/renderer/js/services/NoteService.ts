import { appConfig } from "../config/AppConfig"
import GetNotesQuery from "../model/GetNotesQuery"
import Note from "../model/Note"
import StaveConfig from "../model/StaveConfig"
import NoteRenderer from "../note_renderer/NoteRenderer"
import StylesVarUtil from "../util/StylesVarUtil"

export default class NoteService {

    private notes: Note[]
    private noteRenderer: NoteRenderer = new NoteRenderer(appConfig.staveConfig)

    public async fetchNotes(startRange: number, rangeSize: number): Promise<Note[]> {
        const query: GetNotesQuery = {
            rangeSize: startRange,
            startRange: rangeSize
        }

        return window.pianoApi.getNotes(query)
    }

    public async startRecognize() {
        this.notes = await this.fetchNotes(5, 2)
        const testNote = this.notes.find(note => note.symbol == "F5")
        this.noteRenderer.showNoteOnStave(testNote)
        this.startListeningForNote()
    }

    private startListeningForNote() {
        window.pianoApi.onNotePressed((event: any, value: any) => {
            console.log("onNotePressed")
            console.log(value)
        })
    }

}