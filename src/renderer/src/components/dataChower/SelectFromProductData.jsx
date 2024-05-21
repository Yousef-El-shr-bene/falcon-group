import React from 'react'

export default function SelectFromProductData({Product,ProductData,setProductData,ADD}) {
    console.log(Product , "Product Product Product Product Product Product");
    function addAndRemove(e) {
        if (ProductData.includes(e.id)) {
            let arr = ProductData
            arr = arr.filter((item)=>{
                return item !== e.id
            })
            console.log(arr,ProductData,ProductData.includes(e.id),e.id);
            setProductData(arr)
        } else {
            setProductData([...ProductData,e.id])
        }
    }
    console.log(ProductData,ProductData.includes(0));
  return (
    <div className=' bg-emerald-500 flex flex-row flex-wrap justify-center items-start ' > 
        {Product.map((e,i)=>{
              return  <>
              <div className={` m-1 p-1 rounded-xl w-fit h-fit  ${ProductData.includes(e.id) ?  "bg-emerald-100" :  "bg-emerald-600" } `} key={i}  >
              <h1>{e.data.name}</h1>
              <h2>price : {e.data.price}</h2>
              <h2>id : {e.id}</h2>
              <h1>{ProductData.includes(e.id) && "✔️"}</h1>
              <button onClick={()=>{addAndRemove(e)}} >chose</button>
              </div>
              </>
        })}
        <button className=' bg-emerald-700 rounded-3xl m-3 p-3' onClick={()=>{ADD()}} >supmet</button>
    </div>
  )
}
