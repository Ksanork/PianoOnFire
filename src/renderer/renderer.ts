/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './css/index.css';


import Note from "./js/model/Note"
import Stave from "./js/model/Stave"
import StaveConfig from "./js/model/StaveConfig"
import NoteRenderer from "./js/renderers/NoteRenderer"
import StylesVarUtil from "./js/util/StylesVarUtil"



// top values for note
// C - 125px   47px  
// D - 115px   39px 
// E - 108px   31px
// F - 98px    23px
// G - 87px    15px
// A - 77px    7px
// H - 66px    -1px
// C6 - 57px   -9px
// D6 - 45px   -17px
// E6 - 36px   -25px
// F6 - 25px   -33px
// G6 (91) - -41px
// G6# (92)   -41px
// A6 (42) - -49px

declare global {
    interface Window {
        pianoApi: any;
    }
}

let notes: Note[] = []

async function start() {
    notes = await window.pianoApi.getNotes()

    console.log("renderer")

    const staveConfig: StaveConfig = {
        topNotePosition: 42,
        topNotePx: StylesVarUtil.getIntFromVar("--top-note-px"),
        noteDiffPx: 8,
    }
    
    const stave: Stave = {
        element: undefined,
        container: document.getElementById("stave")
    }
    
    const noteRenderer: NoteRenderer = new NoteRenderer(staveConfig)
    
    const testNote = notes.find(note => note.symbol == "E5")
    
    noteRenderer.showNoteOnStave(testNote, stave)
}
    

start()

   


