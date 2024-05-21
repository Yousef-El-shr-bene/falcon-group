import React, { useEffect, useState } from 'react'
export default function AgentData({ id , Agent }) {

  let agent = Agent.filter((e)=>{return e.id === id })[0]


  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="bg-emerald-400 w-full h-auto p-2 m-2 text-center rounded-lg">
          {agent && `${agent.data.name}`}
        </div>
      </div>
    </>
  )
}
