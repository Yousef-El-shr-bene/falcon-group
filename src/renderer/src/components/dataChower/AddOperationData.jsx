import React, { useEffect, useState } from 'react'
import Box from '../Box'
import SelectFromProductData from "./SelectFromProductData"
export default function AddOperationData({Agent,Product}) {
  console.log("log from addBox",Agent,Product);
  const [selected, setSelected] = useState(Agent[1])
  const [supmet, setSupmet] = useState({Agent:undefined,Product : []}) 
  const [ProductData,setProductData] = useState([])
  function supmetFun(selected) {
    setSupmet({...supmet ,Agent : selected})
  }
  async function ADD() {
    console.log(selected,ProductData);
      await window.electron.ipcRenderer.send('addData', { fileName: 'Operation', data:{agentId : selected.id,productsId:ProductData } })
      await window.electron.ipcRenderer.on('receveAddData', (e, arg) => {
        setSupmet({Agent:undefined,Product : []})
 
      })
  }
  return (
    <div>
    {supmet.Agent === undefined ? <Box people={Agent} selected={selected} setSelected={setSelected} setSupmet={setSupmet} supmetFun={supmetFun} /> : <SelectFromProductData Product={Product} ProductData={ProductData}setProductData={setProductData} ADD={ADD} /> }
    </div>
  )
}
