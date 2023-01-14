import Note from "./Note";

export default interface RenderedNote {
    note: Note,
    isSharp: boolean,
    uuid: string
}