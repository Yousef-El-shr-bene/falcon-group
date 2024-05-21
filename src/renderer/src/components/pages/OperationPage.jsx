import React, { useEffect, useState } from 'react'
import OperationCrdeContener from  '../OperationCrdeContener'
export default function OperationPage({ setSideDaat,operation,Agent,Product }) {

  console.log(operation , "operation");
  return (
    <div>
      <OperationCrdeContener operation={operation} setSideDaat={setSideDaat} Agent={Agent} Product={Product} />
    </div>
  )
}
   