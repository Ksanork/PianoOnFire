import PianoConfig from "../model/PianoConfig";
import StylesVarUtil from "../util/StylesVarUtil";

export const appConfig: PianoConfig = {
    staveConfig: {
        topNotePosition: 42,
        topNotePx: StylesVarUtil.getIntFromVar("--top-note-px"),
        noteDiffPx: 8,
        staveContainerName: "stave"
    },
    consts: {
        IPC_NOTE_PRESSED_EVENT: "pianoEvent:onKeyPressed",
        IPC_GET_NOTES_REQUEST: "pianoRequest:getNotes",
    }
} 