import { electronSharedConfig } from "../../../shared/config/ElectronSharedConfig"
import PianoConfig, { AppConfig } from "../model/PianoConfig";
import StylesVarUtil from "../util/StylesVarUtil";

export const appConfig: AppConfig = {
    staveConfig: {
        topNotePosition: 35,                                                        
        topNotePx: -89 + 69,                                                             
        noteDiffPx: 8,                                                              
        crossLineRelativeOffsetPx: 104,                                             
        lineHeightPx: 1,                                             
        // staveLineDiffPx: StylesVarUtil.getIntFromVar("--line-margin-bottom"),
        staveLineDiffPx: 15,
        staveContainerName: "stave",
        noteDefaultChar: "♪"
    },
    ...electronSharedConfig
} 