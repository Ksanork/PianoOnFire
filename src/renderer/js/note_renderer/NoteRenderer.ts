import Note from "../model/Note";
import RenderedNote from "../model/RenderedNote";
import Stave from "../model/Stave";
import StaveConfig from "../model/StaveConfig";
import NoteUtil from "../util/NoteUtil"
import RandomUtil from "../util/RandomUtil";

export default class NoteRenderer {

    private config: StaveConfig

    constructor(config: StaveConfig) {
        this.config = config
    }

    public renderNote(note: Note, left?: number): RenderedNote {
        const renderedNote = this.createRenderedNote(note)
        const noteElement = this.createDomElementForNote(renderedNote, this.generateTopPositionForNote(note), left)
        const staveContainer = document.getElementById(this.config.staveContainerName)
        staveContainer.append(noteElement)
        return renderedNote
    }

    public clearNote(note: RenderedNote) {
        const staveContainer = document.getElementById(this.config.staveContainerName)
        const noteElement = document.getElementById(note.uuid)
        staveContainer.removeChild(noteElement)
    }

    private createDomElementForNote(renderedNote: RenderedNote, top: number, left = 10) {
        const note = renderedNote.note

        const mainElement = document.createElement("div")
        mainElement.setAttribute("id", renderedNote.uuid)
        mainElement.setAttribute("class", "text-note")
        mainElement.setAttribute("style", `top: ${top}px; left: ${left}px`)

        if (renderedNote.isSharp) {
            const sharpElement = document.createElement("span")
            sharpElement.setAttribute("class", "text-sharp")
            sharpElement.innerHTML = "♯"
            mainElement.appendChild(sharpElement)
        }

        if (NoteUtil.isOutOfStave(note)) {
            let offset = this.config.crossLineRelativeOffsetPx
            const isAboveStave = NoteUtil.isAboveStave(note)
            
            if (!NoteUtil.isCrossed(note)) {
                offset += isAboveStave ? this.config.noteDiffPx : -this.config.noteDiffPx
            } 

            const linesNumber = NoteUtil.getNumberLinesOutOfStave(note)
            for (let i = 0; i < linesNumber; i++) {
                const lineTop = isAboveStave
                    ? offset + i * (this.config.staveLineDiffPx + this.config.lineHeightPx)
                    : offset - i * (this.config.staveLineDiffPx + this.config.lineHeightPx)

                const lineElement = document.createElement("span")
                lineElement.setAttribute("class", "cross-line")
                lineElement.setAttribute("style", `top: ${lineTop}px; left: 0px`)
                mainElement.appendChild(lineElement)
            }
        }

        const symbolElement = document.createElement("span")
        symbolElement.setAttribute("style", `display: none`)
        symbolElement.innerHTML = note.symbol
        mainElement.appendChild(symbolElement)

      
        const noteElement = document.createElement("span")
        noteElement.innerHTML = this.config.noteDefaultChar
        mainElement.appendChild(noteElement)

        return mainElement
    }

    private generateTopPositionForNote(note: Note): number {
        const positionDiff = this.config.topNotePosition - note.position
        return this.config.topNotePx + this.config.noteDiffPx * positionDiff
    }

    private createRenderedNote(note: Note): RenderedNote {
        return {
            note: note,
            uuid: RandomUtil.generateUuid(),
            isSharp: note.symbol.includes("#"),
            isCrossed: NoteUtil.isCrossed(note)
        }
    }
    
}