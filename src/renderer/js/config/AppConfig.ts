import PianoConfig from "../model/PianoConfig";
import StylesVarUtil from "../util/StylesVarUtil";

export const appConfig: PianoConfig = {
    staveConfig: {
        topNotePosition: 35,
        // topNotePx: StylesVarUtil.getIntFromVar("--top-note-px"),
        topNotePx: -49,
        noteDiffPx: 8,
        staveContainerName: "stave"
    },
    consts: {
        IPC_NOTE_PRESSED_EVENT: "pianoEvent:onNotePressed",
        IPC_GET_NOTES_REQUEST: "pianoRequest:getNotes",
    }
} 