// See the Electron documentation for details on how to use preload scripts:

import { appConfig } from "./js/config/AppConfig"
import GetNotesQuery from "./js/model/GetNotesQuery"

// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron')


contextBridge.exposeInMainWorld('pianoApi',{
  getNotes: (query: GetNotesQuery) => ipcRenderer.invoke('getNotes', query),
  onNotePressed: (callback: any) => ipcRenderer.on(appConfig.consts.IPC_NOTE_PRESSED_EVENT, callback)
})