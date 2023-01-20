import SingleTone from "./SingleTone"
import SingleToneEntity from "./SingleToneEntity"

export default class StaveConsts {

    public static SCALES: Record<string, string[]> = {
        C_DUR: ["C", "D", "E", "F", "G", "A", "H", "C"],
        G_DUR: ["G", "A", "H", "C", "D", "E", "F#", "G"]
    }

    // ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "H"]
    public static CLEFS_DISTRIBUTION: Record<string, number[]> = {
        TREBLE: [-5, -5, -4, -4, -3, -2, -2, -1, -1, 0, 0, 1]
    }

    public static ALL_TONES_ORDERED: SingleToneEntity[] = [
        SingleTone.C_HIS,
        SingleTone.CIS_DES,
        SingleTone.D,
        SingleTone.DIS_ES,
        SingleTone.E_FES,
        SingleTone.EIS_F,
        SingleTone.FIS_GES,
        SingleTone.G,
        SingleTone.GIS_AS,
        SingleTone.A,
        SingleTone.AIS_HES,
        SingleTone.H_CES
    ]
}