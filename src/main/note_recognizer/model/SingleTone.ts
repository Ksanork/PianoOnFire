import SingleToneEntity from "./SingleToneEntity";

export default class SingleTone {

    public static C_HIS: SingleToneEntity = {
        symbols: ["H#", "C"],
        localPositions: [-1, 0]
    }

    public static CIS_DES: SingleToneEntity = {
        symbols: ["C#", "Db"],
        localPositions: [0, 1]
    }

    public static D: SingleToneEntity = {
        symbols: ["D"],
        localPositions: [0]
    }

    public static DIS_ES: SingleToneEntity = {
        symbols: ["D#", "Eb"],
        localPositions: [0, 1]
    }

    public static E_FES: SingleToneEntity = {
        symbols: ["E", "Fb"],
        localPositions: [0, 1]
    }

    public static EIS_F: SingleToneEntity = {
        symbols: ["Eb", "F"],
        localPositions: [-1, 0]
    }

    public static FIS_GES: SingleToneEntity = {
        symbols: ["F#", "Gb"],
        localPositions: [0, 1]
    }

    public static G: SingleToneEntity = {
        symbols: ["G"],
        localPositions: [0]
    }

    public static GIS_AS: SingleToneEntity = {
        symbols: ["G#", "Ab"],
        localPositions: [0, 1]
    }

    public static A: SingleToneEntity = {
        symbols: ["A"],
        localPositions: [0]
    }

    public static AIS_HES: SingleToneEntity = {
        symbols: ["A#", "Hb"],
        localPositions: [0, 1]
    }

    public static H_CES: SingleToneEntity = {
        symbols: ["H", "Cb"],
        localPositions: [0, 1]
    }

    public static ALL_TONES_ORDERED: SingleToneEntity[] = [
        this.C_HIS,
        this.CIS_DES,
        this.D,
        this.DIS_ES,
        this.E_FES,
        this.EIS_F,
        this.FIS_GES,
        this.G,
        this.GIS_AS,
        this.A,
        this.AIS_HES,
        this.H_CES
    ]
}