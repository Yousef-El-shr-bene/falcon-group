import React, { useEffect, useState } from 'react'
import Operationdata from './dataChower/Operationdata'
import AgentData from './dataChower/AgentData'
import ProductData from './dataChower/ProductData'
import AddOperationData from './dataChower/AddOperationData'
import AddAgentData from "./dataChower/AddAgentDataa";
import AddProductData from './dataChower/AddProductData'
export default function SidePage({ sideData,Agent,Product,operation }) {
  return (
    <div className="bg-emerald-300 w-1/5 h-full fixed right-0 flex justify-center items-center">
      {sideData.type === '' ? 'no data': sideData.type === 'Operation' ? <Operationdata id={sideData.id} operation={operation} Agent={Agent} Product={Product} />: sideData.type === 'Agent' ? <AgentData id={sideData.id} Agent={Agent} />: sideData.type === 'Product' ? <ProductData id={sideData.id} Product={Product} />: sideData.type === 'addOperation' ? <AddOperationData Agent={Agent} Product={Product}  />: sideData.type === "addAgentData" ? <AddAgentData  /> : sideData.type === "AddProductData" ? <AddProductData/> : "" }
    </div>
  )
}
