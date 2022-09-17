import { Note } from "./src/api/note_recognizer/model/Note";
import NoteRecognizer from "./src/api/note_recognizer/NoteRecognizer";

var easymidi = require('easymidi');

var inputs = easymidi.getInputs();
console.log(inputs);

const noteRecognizer: NoteRecognizer = new NoteRecognizer()

// notes from 36 (C lowest) to 96 (C highest) - next C every 12
var input = new easymidi.Input('DigitalKBD-1');
input.on('noteon', function (msg: any) {
  console.log(msg);
  const note: Note = noteRecognizer.recognizeNoteFromMidi(msg.note)!
  console.log(note)
});