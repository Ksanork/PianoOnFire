import { assert } from "chai";
import Scale from "../../../src/main/note_recognizer/model/Scale";
import NotesGenerator from "../../../src/main/note_recognizer/util/NotesGenerator";

const NOTES_WITH_RANGE_2_AND_START_5 = [
    { value: 72, symbol: 'H#5', position: 29 },
    { value: 72, symbol: 'C5', position: 30 }, 
    { value: 73, symbol: 'C#5', position: 30 },
    { value: 73, symbol: 'Db5', position: 31 },
    { value: 74, symbol: 'D5', position: 31 }, 
    { value: 75, symbol: 'D#5', position: 31 },
    { value: 75, symbol: 'Eb5', position: 32 },
    { value: 76, symbol: 'E5', position: 32 }, 
    { value: 76, symbol: 'Fb5', position: 33 },
    { value: 77, symbol: 'Eb5', position: 32 },
    { value: 77, symbol: 'F5', position: 33 }, 
    { value: 78, symbol: 'F#5', position: 33 },
    { value: 78, symbol: 'Gb5', position: 34 },
    { value: 79, symbol: 'G5', position: 34 },
    { value: 80, symbol: 'G#5', position: 34 },
    { value: 80, symbol: 'Ab5', position: 35 },
    { value: 81, symbol: 'A5', position: 35 },
    { value: 82, symbol: 'A#5', position: 35 },
    { value: 82, symbol: 'Hb5', position: 36 },
    { value: 83, symbol: 'H5', position: 36 },
    { value: 83, symbol: 'Cb5', position: 37 },
    { value: 84, symbol: 'H#6', position: 36 },
    { value: 84, symbol: 'C6', position: 37 },
    { value: 85, symbol: 'C#6', position: 37 },
    { value: 85, symbol: 'Db6', position: 38 },
    { value: 86, symbol: 'D6', position: 38 },
    { value: 87, symbol: 'D#6', position: 38 },
    { value: 87, symbol: 'Eb6', position: 39 },
    { value: 88, symbol: 'E6', position: 39 },
    { value: 88, symbol: 'Fb6', position: 40 },
    { value: 89, symbol: 'Eb6', position: 39 },
    { value: 89, symbol: 'F6', position: 40 },
    { value: 90, symbol: 'F#6', position: 40 },
    { value: 90, symbol: 'Gb6', position: 41 },
    { value: 91, symbol: 'G6', position: 41 },
    { value: 92, symbol: 'G#6', position: 41 },
    { value: 92, symbol: 'Ab6', position: 42 },
    { value: 93, symbol: 'A6', position: 42 },
    { value: 94, symbol: 'A#6', position: 42 },
    { value: 94, symbol: 'Hb6', position: 43 },
    { value: 95, symbol: 'H6', position: 43 },
    { value: 95, symbol: 'Cb6', position: 44 }
  ]

const NOTES_C_DUR_WITH_RANGE_2_AND_START_5 = [
    { value: 72, symbol: 'C5', position: 30 },
    { value: 74, symbol: 'D5', position: 31 },
    { value: 76, symbol: 'E5', position: 32 },
    { value: 77, symbol: 'F5', position: 33 },
    { value: 79, symbol: 'G5', position: 34 },
    { value: 81, symbol: 'A5', position: 35 },
    { value: 83, symbol: 'H5', position: 36 },
    { value: 84, symbol: 'C6', position: 37 },
    { value: 86, symbol: 'D6', position: 38 },
    { value: 88, symbol: 'E6', position: 39 },
    { value: 89, symbol: 'F6', position: 40 },
    { value: 91, symbol: 'G6', position: 41 },
    { value: 93, symbol: 'A6', position: 42 },
    { value: 95, symbol: 'H6', position: 43 }
  ]

describe('NoteGenerator test', () => {
    it('Should return notes with correct positions and symbols for all notes', () => {
        const allNotes = NotesGenerator.generateAllNotes(2, 5)
        assert.deepEqual(allNotes, NOTES_WITH_RANGE_2_AND_START_5)
    });

    it('Should return notes with correct positions and symbols with C_DUR scale', () => {
        const notes = NotesGenerator.generateNotesByScale(Scale.C_DUR, 2, 5)
        assert.deepEqual(notes, NOTES_C_DUR_WITH_RANGE_2_AND_START_5)
    });
});