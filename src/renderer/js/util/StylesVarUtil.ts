export default class StylesVarUtil {
    
    public static getIntFromVar(varName: string): number {
        return parseInt(getComputedStyle(document.documentElement).getPropertyValue(varName))
    }
}