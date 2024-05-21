import React from 'react'
import AgentCrd from './AgentCrd'
export default function AgentCrdContener({ Agent, setSideDaat }) {
  console.log(Agent, 'Agent')
  return (
    <div className="flex justify-center items-center flex-wrap mt-4">
            <div className='bg-emerald-500 font-extrabold text-7xl rounded-full m-1 p-1 text-white ' onClick={()=>{setSideDaat({type : "addAgentData" , id : 0})}}  >+</div>
      {Agent && Agent.map((e, i) => (
        <AgentCrd key={i} data={e} setSideDaat={setSideDaat} />
      ))}
    </div>
  )
}
