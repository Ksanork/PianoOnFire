import { Note } from "../model/Note";

export default class NotesGenerator {

    static generateAllNotes(rangeSize: number = 5, startRange: number = 3, lowestNote: number = 36, symbols: string[] = this.getSymbolsWithMajor()): Note[] {
        let notes: Note[] = []
        
        for (let i = startRange, noteValue = lowestNote; i < rangeSize + startRange; i++, noteValue += 12) {
            let value = noteValue
            symbols.forEach((symbol) => {
                notes.push(this.createNote(value++, symbol + i.toString()))
            })
        }


        return notes
    }

    private static getSymbolsWithMajor(): string[] {
        return ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "H"]
    }

    private static createNote(value: number, symbol: string): Note {
        return {
            value: value,
            symbol: symbol
        }
    }
}