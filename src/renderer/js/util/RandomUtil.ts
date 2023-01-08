import {v4 as uuidv4} from 'uuid';

export default class RandomUtil {
    public static randFrom(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    public static generateUuid() {
        return uuidv4()
    }
}