import React, { useEffect, useState } from 'react'
import OperationCrd from './OperationCrd'
export default function OperationCrdeContener({ operation, setSideDaat,Agent,Product }) {
  return (
    <div className="flex justify-center items-center flex-wrap mt-4">
      <div className='bg-emerald-500 font-extrabold text-7xl rounded-full m-1 p-1 text-white ' onClick={()=>{setSideDaat({type : "addOperation" , id : 0})}} >+</div>
      {operation.map((e, i) => (
        <>
        <div key={i} >
        <OperationCrd data={e} setSideDaat={setSideDaat} key={i} Agent={Agent} Product={Product} />
        </div>
        </>
      ))}
    </div>
  )
}
