import { Note } from "../model/Note"
import GetNotesQuery from "../model/queries/GetNotesQuery"
import StaveConsts from "../model/StaveConsts"
import NotesGenerator from "../util/NotesGenerator"
import EventHandler from "./EventHandler"

export default class NotesEventHandler {
  public static getAllNotes(query: GetNotesQuery) {
    return NotesGenerator.generateAllNotes(query.rangeSize, query.startRange)
  }

  public static getNotesByScale(query: GetNotesQuery) {
    return NotesGenerator.generateNotesByScale(StaveConsts.SCALES[query.scale], query.rangeSize, query.startRange)
  }

}