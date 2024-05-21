import React, { useRef } from 'react'


export default function AddProductData() {
  const ref = useRef(null)
  const ref2 = useRef(null)

   async function addAgent() {
    if (ref !== null && ref2 !== null && ref.current.value !== "" && ref2.current.value !== "" && typeof Number(ref2.current.value) === "number" ) {
  await  window.electron.ipcRenderer.send('addData3', { fileName: 'Product' , data : {name : ref.current.value , price : Number(ref2.current.value) } })
  await  window.electron.ipcRenderer.on('receveAddData3', (e, arg) => {
      })
    }
  }
  return (
    <div>
      <input type="text" placeholder='name' ref={ref} />
      <input type="text" placeholder='price' ref={ref2} />
      <button onClick={addAgent}  >supmet</button>
    </div>
  )
}
