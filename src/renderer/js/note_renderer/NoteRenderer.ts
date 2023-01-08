import Note from "../model/Note";
import RenderedNote from "../model/RenderedNote";
import Stave from "../model/Stave";
import StaveConfig from "../model/StaveConfig";
import RandomUtil from "../util/RandomUtil";

export default class NoteRenderer {

    private config: StaveConfig

    constructor(config: StaveConfig) {
        this.config = config
    }

    public renderNote(note: Note): RenderedNote {
        const renderedNote = this.createRenderedNote(note)
        const noteElement = this.createDomElementForNote(renderedNote, this.generateTopPositionForNote(note))
        const staveContainer = document.getElementById(this.config.staveContainerName)
        staveContainer.append(noteElement)
        return renderedNote
    }

    public clearNote(note: RenderedNote) {
        const staveContainer = document.getElementById(this.config.staveContainerName)
        const noteElement = document.getElementById(note.uuid)
        staveContainer.removeChild(noteElement)
    }

    private createDomElementForNote(note: RenderedNote, top: number)  {
        const element = document.createElement("div")
        element.setAttribute("id", note.uuid)
        element.setAttribute("class", "text-note")
        element.setAttribute("style", `top: ${top}px`)
        element.innerHTML = "𝅘𝅥𝅮"
        return element
    }

    private generateTopPositionForNote(note: Note): number {
        const positionDiff = this.config.topNotePosition - note.position
        return this.config.topNotePx + this.config.noteDiffPx * positionDiff
    }

    private createRenderedNote(note: Note): RenderedNote {
        return {
            note: note,
            uuid: RandomUtil.generateUuid()
        }
    }
    
}