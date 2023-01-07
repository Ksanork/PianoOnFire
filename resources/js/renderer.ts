// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.

import Note from "./model/Note"
import Stave from "./model/Stave"
import StaveConfig from "./model/StaveConfig"
import NoteRenderer from "./renderers/NoteRenderer"
import StylesVarUtil from "./util/StylesVarUtil"


// top values for note
// C - 125px   110px  
// D - 115px   95px 
// E - 108px   (9 * 21/2 - 1 + 6 = 36.5)
// F - 98px    80px
// G - 87px    70px
// A - 77px
// H - 66px
// C6 - 57px
// D6 - 45px   (3 * 21/2 - 1 + 6 = 36.5)
// E6 - 36px   (2 * 21/2 - 1 + 6 = 26)
// F6 - 25px   (1 * line_margin_bottom/2 (21/2) - line_size (1) + note_size/2 (12/2)) px
// G6 (91) - 0px    0px

export function start() {
    console.log("renderer")

    const staveConfig: StaveConfig = {
        topNoteValue: 91,
        lineSize: StylesVarUtil.getIntFromVar("--line-size"),
        lineMarginBottom: StylesVarUtil.getIntFromVar("--line-margin-bottom"),
        noteSize: StylesVarUtil.getIntFromVar("--note-size")
    }
    
    const stave: Stave = {
        element: undefined,
        container: document.getElementById("stave")
    }
    
    const noteRenderer: NoteRenderer = new NoteRenderer(staveConfig)
    
    const testNote: Note = {
        value: 76,
        symbol: "E"
    }
    
    noteRenderer.showNoteOnStave(testNote, stave)
}

