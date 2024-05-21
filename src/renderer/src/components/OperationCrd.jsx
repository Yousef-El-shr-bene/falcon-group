import { useEffect, useState } from "react"
export default function OperationCrd({data,setSideDaat,Agent,Product}) {
  const [filtreData , setfiltreData] = useState({Pruduct : []})
  useEffect(() => {
    let user
    for (let i = 0; i < Agent.length; i++) {
      if (data && Agent[i].id === data.data.agentId) {
        console.log(Agent[i].id , data.data.agentId);
       user = Agent[i]
      }
    }
    let p = []  
    for (let i = 0; i < Product.length; i++) {
      if (data && data.data.productsId.includes(Product[i].id)      ) {
        p.push(Product[i])
        
      }
    }
      setfiltreData({...filtreData,Pruduct : p,User : user})
  }, [data])
    return (
      <div className='rounded-t-lg bg-emerald-400 w-auto h-auto text-start  mt-2 shadow-xl m-1 ' onClick={()=>{setSideDaat({type : "Operation" , id : data.id})}} >
          <h1 className="font-bold p-2 bg-emerald-500 text-center rounded-t-lg" >{filtreData.User && `${filtreData.User.data.name}`}</h1>
          {filtreData.Pruduct.map((e,i)=>{
            return <h1 className="font-bold p-2 " key={i} >{e.data.name}</h1>
          })}
      </div>
    )
  }  
    