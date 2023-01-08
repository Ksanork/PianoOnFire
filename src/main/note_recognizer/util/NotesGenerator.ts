import { Note } from "../model/Note";

export default class NotesGenerator {

    static generateAllNotes(rangeSize: number = 5, startRange: number = 3, symbols: string[] = this.getSymbolsWithMajor()): Note[] {
        let notes: Note[] = []
        
        const lowestNote = (startRange + 1) * 12
        const positions = this.getDistributionForTrebleClef()

        for (let i = startRange, noteValue = lowestNote; i < rangeSize + startRange; i++, noteValue += 12) {
            let value = noteValue
            let position = i * 7

            symbols.forEach((symbol, idx) => {
                notes.push(this.createNote(value++, symbol + i.toString(), positions[idx] + position))
            })
        }

        return notes
    }

    private static getSymbolsWithMajor(): string[] {
        return ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "H"]
        // return ["A", "A#", "H", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
    }

    private static getDistributionForTrebleClef() {
        // return [0, 0, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]
        return [-5, -5, -4, -4, -3, -2, -2, -1, -1, 0, 0, 1]
    }

    private static createNote(value: number, symbol: string, position: number): Note {
        return {
            value: value,
            symbol: symbol,
            position: position
        }
    }
}