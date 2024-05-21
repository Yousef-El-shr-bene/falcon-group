import React, { useEffect, useState } from 'react'
export default function Operationdata({ id ,operation,Agent,Product  }) {
  // const [Operation, seOperation] = useState({})
  // const [productsData, setproductsData] = useState([])
  // const [agentdata, setagentdata] = useState({})
    let Operation = operation && operation.filter((e)=>{return e.id === id})[0]
    let agent = Agent && Agent.filter((e)=>{return Operation.data.agentId === e.id})[0]
    let product = Product && Product.filter((e)=>{return Operation.data.productsId.includes(e.id)})


  // useEffect(() => {
  //   async function Efect() {
  //     await window.electron.ipcRenderer.send('gitData2', { fileName: 'Operation', id: id })
  //     await window.electron.ipcRenderer.on('receveData2', (e, arg) => {
  //       seOperation(arg)
  //     })
  //   }
  //   Efect()
  // }, [id])

  // useEffect(() => {
  //   async function Efect() {
  //     await window.electron.ipcRenderer.send('gitData3', {
  //       fileName: 'Agent',
  //       id: Operation.data?.agentId
  //     })
  //     await window.electron.ipcRenderer.on('receveData3', (e, arg) => {
  //       setagentdata(arg)
  //     })

  //     await window.electron.ipcRenderer.send('gitAlldataId1', {
  //       fileName: 'Product',
  //       ids: Operation.data?.productsId
  //     })
  //     await window.electron.ipcRenderer.on('receveGitAlldataId1', (e, arg) => {
  //       console.log(arg, 'PPPPPPPPPPPPPPP')
  //       setproductsData(arg)
  //     })
  //   }
  //   if (Operation.data) {
  //     Efect()
  //   }
  // }, [Operation])
console.log(id ,Operation,agent,product);
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="bg-emerald-400 w-full h-auto p-2 m-2 text-center rounded-lg">
          {agent.data && `${agent.data.name}`}
        </div>
        <div className="bg-emerald-100 w-full h-auto p-2 m-2 text-center rounded-lg">
          {product.map((e, i) => <h1 key={i}> {e.data.name} </h1>)}
        </div>
      </div>
    </>
  )
}
