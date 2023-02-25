import SharedConfig from "./SharedConfig"

export const electronSharedConfig: SharedConfig = {
  ipc: {
    NOTE_PRESSED_EVENT: "pianoEvent:onNotePressed",
    GET_NOTES_REQUEST: "pianoRequest:getAllNotes",
  },
}