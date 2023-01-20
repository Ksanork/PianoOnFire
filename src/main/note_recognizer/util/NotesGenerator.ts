import { Note } from "../model/Note";
import StaveConsts from "../model/StaveConsts";
import SingleToneEntity from "../model/SingleToneEntity";

export default class NotesGenerator {

    static generateAllNotes(rangeSize = 5, startRange = 3, scale: string[] = null): Note[] {
        const notes: Note[] = []
        const allTones: SingleToneEntity[] = StaveConsts.ALL_TONES_ORDERED
        
        const lowestNote = (startRange + 1) * allTones.length
        const singleTones = this.prepareSymbolsWithPostitions(allTones, StaveConsts.CLEFS_DISTRIBUTION.TREBLE, scale)

        for (let i = startRange, noteValue = lowestNote; i < rangeSize + startRange; i++, noteValue += allTones.length) {
            let value = noteValue
            const position = i * 7    // 7 - number of positions on a stave within scale

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

    public static generateNotesByScale(scale: string[], rangeSize = 5, startRange = 3): Note[] {
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



    private static createNote(value: number, symbol: string, position: number): Note {
        return {
            value: value,
            symbol: symbol,
            position: position
        }
    }
}