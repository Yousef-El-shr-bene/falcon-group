import React from 'react'
import ProductCrd from './ProductCrd'
export default function ProductCrdContener({ Product ,setSideDaat }) {
  return (
    <div className="flex justify-center items-center flex-wrap mt-4">
                  <div className='bg-emerald-500 font-extrabold text-7xl rounded-full m-1 p-1 text-white ' onClick={()=>{setSideDaat({type : "AddProductData" , id : 0})}}  >+</div>
      {Product.map((e) => (
        <ProductCrd data={e} setSideDaat={setSideDaat} />
      ))}
      <div className="m-1 p-1">
      </div>
    </div>
  )
}
// AddProductData