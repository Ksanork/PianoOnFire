import { Note } from "../model/Note";
import Scale from "../model/Scale";
import SingleTone from "../model/SingleTone";
import SingleToneEntity from "../model/SingleToneEntity";

export default class NotesGenerator {

    static generateAllNotes(rangeSize: number = 5, startRange: number = 3, scale: string[] = null): Note[] {
        let notes: Note[] = []
        
        const lowestNote = (startRange + 1) * SingleTone.ALL_TONES_ORDERED.length
        const singleTones = this.prepareSymbolsWithPostitions(SingleTone.ALL_TONES_ORDERED, this.getDistributionForTrebleClef(), scale)

        for (let i = startRange, noteValue = lowestNote; i < rangeSize + startRange; i++, noteValue += SingleTone.ALL_TONES_ORDERED.length) {
            let value = noteValue
            let position = i * 7    // 7 - number of positions on a stave within scale

            for (const singleTone of singleTones)  {
                for (const [idx, symbol] of singleTone.symbols.entries()) {
                    if (symbol != null) {
                        notes.push(this.createNote(value, symbol + i.toString(), singleTone.localPositions[idx] + position))
                    }
                }

                value++
            }
        }

        return notes
    }

    public static generateNotesByScale(scale: string[], rangeSize: number = 5, startRange: number = 3): Note[] {
        return this.generateAllNotes(rangeSize, startRange, scale)
    }

    private static prepareSymbolsWithPostitions(singleTones: SingleToneEntity[], distribution: number[], scale: string[]): SingleToneEntity[] {
        const symbols: SingleToneEntity[] = singleTones.map((singleTone: SingleToneEntity, idx) => {
            return {
                symbols: this.filterOnlySymbolsInScale(singleTone.symbols, scale),
                localPositions: this.applyPositions(singleTone.localPositions, distribution, idx)
            }
        })

        return symbols
    }

    private static applyPositions(localPositions: number[], distribution: number[], idx: number) {
        return localPositions.map(position => position + distribution[idx])
    }

    private static filterOnlySymbolsInScale(symbols: string[], scale: string[]) {
        if (scale != null) {
            return symbols.map((symbol: string) => scale.includes(symbol) ? symbol : null)
        }

        return symbols
    }

    private static getDistributionForTrebleClef() {
        // ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "H"]
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