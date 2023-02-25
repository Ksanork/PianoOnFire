import Note from "../model/Note"

export default class NoteUtil {

  public static DOWN_START_POSITION = 25
  public static UP_START_POSITION = 33

  public static getNumberLinesOutOfStave(note: Note): number {
    if (note.position > this.DOWN_START_POSITION && note.position < this.UP_START_POSITION) {
      return 0
    }

    const diffToStave = note.position < this.DOWN_START_POSITION
      ? this.DOWN_START_POSITION - note.position
      : note.position - this.UP_START_POSITION
    
    console.log(`lines for ${note.symbol} - ${Math.floor(diffToStave / 2) }`)
    return Math.floor(diffToStave / 2)
  }

  public static isAboveStave(note: Note) {
    return note.position > this.UP_START_POSITION
  }

  public static isUnderStave(note: Note) {
    return note.position < this.DOWN_START_POSITION
  }
  
  public static isOutOfStave(note: Note) {
    return this.isAboveStave(note) || this.isUnderStave(note)
  }
  public static isCrossed(note: Note): boolean {
    return note.position % 2 != 0
  }
}