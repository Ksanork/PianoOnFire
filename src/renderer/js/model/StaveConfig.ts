export default interface StaveConfig {
    topNotePosition: number,                // position of the note above first stave's line (A5)
    topNotePx: number,                      // top position in px of the note above first stave's line (A5)
    noteDiffPx: number,                     // number of px between each note
    crossLineRelativeOffsetPx: number,      // relative top postion for all additional lines out of the stave (also the line which crosses a note)
    staveLineDiffPx: number,                // number of px between each stave's line
    lineHeightPx: number,                   // height of the line in a stave
    staveContainerName: string,
    noteDefaultChar: string

}