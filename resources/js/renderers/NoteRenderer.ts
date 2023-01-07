import Note from "../model/Note";
import Stave from "../model/Stave";
import StaveConfig from "../model/StaveConfig";

export default class NoteRenderer {

    private config: StaveConfig

    constructor(config: StaveConfig) {
        this.config = config
    }

    public showNoteOnStave(note: Note, stave: Stave) {
        const noteElement = this.createDomElementForNote(note, this.generateTopPositionForNote(note))
        stave.container.append(noteElement)
    }

    private createDomElementForNote(note: Note, top: number)  {
        const element = document.createElement("div")
        element.setAttribute("class", "note")
        element.setAttribute("style", `top: ${top}px`)

        element.innerHTML = `
            <div class="note-circle"></div>
            <div class="note-line"></div>
        `

        return element
    }

    private generateTopPositionForNote(note: Note): number {
        // const idx = note.value - this.config.topNoteValue
        const idx = this.config.topNoteValue - note.value
        return idx * this.config.lineMarginBottom/2 - this.config.lineSize + this.config.noteSize/2
    }
}