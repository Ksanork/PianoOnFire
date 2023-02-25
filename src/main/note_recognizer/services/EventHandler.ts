import { IpcMain } from "electron"
import EventResponse from "../../../shared/response/EventReponse"

export default class EventHandler {

  public static registerEventHandler<Q, T>(ipcMain: IpcMain, eventName: string, callback: (query: Q) => T) {
    ipcMain.handle(eventName, async (event, message) => this.handleEventWith<Q, T>(event, message, callback, eventName))
  }

  private static handleEventWith<Q, T>(event: any, message: any, callback: (query: Q) => T, eventName: string): EventResponse<T> {
    const query: Q = message as Q 
    console.log(`[EVENT] Received ${eventName} with query = ${query}`)
    return this.handleResponse<T>(eventName, callback(query))
  }

  private static handleResponse<T>(event: string, response: T): EventResponse<T> {
    return {
      event: event,
      result: response
    }
  }
}