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
        element.setAttribute("class", "text-note")
        element.setAttribute("style", `top: ${top}px`)
        element.innerHTML = "𝅘𝅥𝅮"
        return element
    }

    private generateTopPositionForNote(note: Note): number {
        const positionDiff = this.config.topNotePosition - note.position
        return this.config.topNotePx + this.config.noteDiffPx * positionDiff
    }
}