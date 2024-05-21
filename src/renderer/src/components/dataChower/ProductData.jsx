import React, { useEffect, useState } from 'react'
export default function ProductData({ id,Product }) {
  let product= Product.filter((e)=>{return e.id === id})[0]
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="bg-emerald-400 w-full h-auto p-2 m-2 text-center rounded-lg">
          {product.data && `${product.data.name}`}
          <div>
          prise : {product.data && `${product.data.price}`}
          </div>
        </div>
      </div>
    </>
  )
}
