export default function ProductCrd({ data,setSideDaat }) {
  console.log(data, 'data')
  return (
    <div className="rounded-t-lg bg-emerald-400 w-auto h-auto text-start  mt-2 shadow-xl m-2 " onClick={()=>{setSideDaat({type : "Product" , id : data.id})}} >
      <h1 className="font-bold p-2 bg-emerald-500 text-center rounded-t-lg">{data.data.name}</h1>
      <h1 className="font-bold p-2 ">prise : {data.data.price}</h1>
    </div>
  )
}
