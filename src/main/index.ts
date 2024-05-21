import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  const {
    gitdata,
    gitAlldata,
    addData,
    deleatData,
    gitAlldataId
  } = require('../../resources/fileSystemDp/file')
  // // // // // //
  ipcMain.on('gitAllData', async (e, arg) => {
    e.sender.send('receveAllData', await gitAlldata(arg.fileName))
  })
  // // // // // //
  ipcMain.on('gitAllData2', async (e, arg) => {
    e.sender.send('receveAllData2', await gitAlldata(arg.fileName))
  })
  // // // // // //
  ipcMain.on('gitAllData3', async (e, arg) => {
    e.sender.send('receveAllData3', await gitAlldata(arg.fileName))
  })
  // // // // // //
  ipcMain.on('gitAllData4', async (e, arg) => {
    e.sender.send('receveAllData4', await gitAlldata(arg.fileName))
  })
  // // // // // //
  ipcMain.on('gitAllData5', async (e, arg) => {
    e.sender.send('receveAllData5', await gitAlldata(arg.fileName))
  })
  // // // // // //
  ipcMain.on('gitAllData6', async (e, arg) => {
    e.sender.send('receveAllData6', await gitAlldata(arg.fileName))
  })
  ipcMain.on('gitAllData7', async (e, arg) => {
    e.sender.send('receveAllData7', await gitAlldata(arg.fileName))
  })
  // // // // // //
  // // // // // //
  // // // // // //
  ipcMain.on('gitData', async (e, arg) => {
    e.sender.send('receveData', await gitdata(arg.fileName, arg.id))
  })
  // // // // // //
  ipcMain.on('gitData2', async (e, arg) => {
    e.sender.send('receveData2', await gitdata(arg.fileName, arg.id))
  })
  // // // // // //
  ipcMain.on('gitData3', async (e, arg) => {
    e.sender.send('receveData3', await gitdata(arg.fileName, arg.id))
  })
  // // // // // //
  ipcMain.on('gitData4', async (e, arg) => {
    e.sender.send('receveData4', await gitdata(arg.fileName, arg.id))
  })
  // // // // // //
  ipcMain.on('gitData5', async (e, arg) => {
    e.sender.send('receveData5', await gitdata(arg.fileName, arg.id))
  })
  // // // // // //
  // // // // // //
  // // // // // //
  ipcMain.on('addData', async (e, arg) => {
    e.sender.send('receveAddData', await addData(arg.fileName, arg.data))
  })
  // // // // // //
  ipcMain.on('addData2', async (e, arg) => {
    e.sender.send('receveAddData2', await addData(arg.fileName, arg.data))
  })
  // // // // // //
  ipcMain.on('addData3', async (e, arg) => {
    e.sender.send('receveAddData3', await addData(arg.fileName, arg.data))
  })
  // // // // // //
  // // // // // //
  // // // // // //
  ipcMain.on('deleatData', async (e, arg) => {
    e.sender.send('receveDeleatData', await deleatData(arg.fileName, arg.id))
  })
  // // // // // //
  // // // // // //
  // // // // // //
  ipcMain.on('gitAlldataId', async (e, arg) => {
    e.sender.send('receveGitAlldataId', await gitAlldataId(arg.fileName, arg.ids))
  })
  // // // // // //
  ipcMain.on('gitAlldataId1', async (e, arg) => {
    e.sender.send('receveGitAlldataId1', await gitAlldataId(arg.fileName, arg.ids))
  })
  // // // // // //

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
// der name
// 