import React, { useRef } from 'react'


export default function AddAgentDataa() {
  const ref = useRef(null)
  function addAgent() {
    if (ref !== null) {
      window.electron.ipcRenderer.send('addData2', { fileName: 'Agent' , data : {name : ref.current.value } })
      window.electron.ipcRenderer.on('receveAddData2', (e, arg) => {
      })
    }  
  }
  return (
    <div>
      <input type="text" ref={ref} />
      <button onClick={addAgent}  >supmet</button>
    </div>
  )
}
