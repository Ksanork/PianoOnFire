import { Note } from "../model/Note"
import GetNotesQuery from "../../../shared/query/GetNotesQuery"
import StaveConsts from "../model/StaveConsts"
import NotesGenerator from "../util/NotesGenerator"
import EventHandler from "./EventHandler"

export default class NotesEventHandler {
  public static getAllNotes(query: GetNotesQuery): Note[] {
    return NotesGenerator.generateAllNotes(query.rangeSize, query.startRange)
    // return NotesGenerator.generateNotesByScale(StaveConsts.SCALES.G_DUR, query.rangeSize, query.startRange)
  }

  public static getNotesByScale(query: GetNotesQuery) {
    return NotesGenerator.generateNotesByScale(StaveConsts.SCALES[query.scale], query.rangeSize, query.startRange)
  }

}