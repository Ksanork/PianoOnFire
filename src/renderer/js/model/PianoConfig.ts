import StaveConfig from "./StaveConfig";

export default interface PianoConfig {
    staveConfig: StaveConfig,
    consts?: { [name: string]: string }
}