import SharedConfig from "../../../shared/config/SharedConfig"
import StaveConfig from "./StaveConfig";

export type AppConfig = PianoConfig & SharedConfig

export default interface PianoConfig {
    staveConfig: StaveConfig,
    // consts?: { [name: string]: string }
}