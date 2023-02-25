// See the Electron documentation for details on how to use preload scripts:

import { appConfig } from "./js/config/AppConfig"

// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron'
import GetNotesQuery from "../shared/query/GetNotesQuery"

contextBridge.exposeInMainWorld('pianoApi',{
  getNotes: (query: GetNotesQuery) => ipcRenderer.invoke(appConfig.ipc.GET_NOTES_REQUEST, query),
  onNotePressed: (callback: any) => ipcRenderer.on(appConfig.ipc.NOTE_PRESSED_EVENT, callback)
})