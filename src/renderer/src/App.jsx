import  Header  from "./components/Header";
import HomePage from './components/pages/HomePage'
import OperationPage from './components/pages/OperationPage'
import Agentpage from './components/pages/Agentpage'
import ProductPage from "./components/pages/ProductPage";
import SidePage from './components/SidePage'
import {  useEffect, useState } from "react";
function App() {
  const [navegation , setNavegation] = useState({page : 0 , comentId : undefined})
  const [sideData,setSideDaat] = useState({type : "" , id : 0})
  //
  const [Agent, setAgent] = useState([])
  const [Product, setProduct] = useState([])
  const [operation, setOperation] = useState([])
  useEffect(() => {
    if (Agent.length === 0) {
      window.electron.ipcRenderer.send('gitAllData', { fileName: 'Agent' })
      window.electron.ipcRenderer.on('receveAllData', (e, arg) => {

        setAgent(arg)
      })
    }
  }, [Agent])
  
  useEffect(() => {
    if (Product.length === 0) {
      window.electron.ipcRenderer.send('gitAllData4', { fileName: 'Product' })
      window.electron.ipcRenderer.on('receveAllData4', (e, arg) => {
        setProduct(arg)
      })
    }
  }, [Product])

  useEffect(() => {
    if (operation.length === 0) {
      window.electron.ipcRenderer.send('gitAllData7', { fileName: 'Operation' })
      window.electron.ipcRenderer.on('receveAllData7', (e, arg) => {
        console.log(arg, 'argdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd')
        setOperation(arg)
      })
    }
  }, [operation])
  return (
    <>
    <div className="w-full h-fit bg-emerald-100" >
    <Header setNavegation={setNavegation} navegation={navegation} />
    <div className="flex flex-row w-full " >
      <div className="w-4/5" >
    {navegation.page === 0 ? <OperationPage setSideDaat={setSideDaat} operation={operation} Agent={Agent} Product={Product} /> : navegation.page === 1 ? <Agentpage setSideDaat={setSideDaat} Agent={Agent} />  : navegation.page === 2 ? <ProductPage setSideDaat={setSideDaat} Product={Product} /> : navegation.page === 3 ? <HomePage/> : <h1> not found </h1> }
    </div>
    <SidePage sideData={sideData} Agent={Agent} Product={Product} operation={operation} setOperation={setOperation} setAgent={setAgent}  />
    </div>
    </div> 

    </>
  )
}

export default App

// الصفحة الاولي صفحة الاوردرات
// صفحة المنتجات
// صفحة المستخدمين
// نظرة عامة