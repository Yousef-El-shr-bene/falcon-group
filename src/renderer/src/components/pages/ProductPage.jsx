import React, { useEffect, useState } from 'react'
import ProductCrdContener from '../ProductCrdContener'
export default function ProductPage({setSideDaat,Product}) {

  return (
    <div>
      <ProductCrdContener Product={Product} setSideDaat={setSideDaat} />
    </div>
  )
}
