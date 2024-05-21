function GitdataId(fileName, id) {
  let data
  window.electron.ipcRenderer.send('gitData', { fileName: fileName, id: id })
  window.electron.ipcRenderer.on('receveData', (e, arg) => {
    data = arg
  })
  return data
}

function GitAlldataId(fileName) {
  let data
  window.electron.ipcRenderer.send('gitAllData', { fileName: fileName })
  window.electron.ipcRenderer.on('receveAllData', (e, arg) => {
    data = arg
  })
  return data
}

function addData(fileName, data) {
  window.electron.ipcRenderer.send('addData', { fileName: fileName, data, data: data })
  window.electron.ipcRenderer.on('receveAddData', (e, arg) => {})
}

function deleatData(fileName, id) {
  window.electron.ipcRenderer.send('gitAllData', { fileName: fileName, id: id })
  window.electron.ipcRenderer.on('receveAllData', (e, arg) => {})
}

export { GitdataId, GitAlldataId, addData, deleatData }
