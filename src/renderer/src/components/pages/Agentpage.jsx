import React, { useEffect, useState } from 'react'
import AgentCrdContener from '../AgentCrdContener'
export default function Agentpage({ setSideDaat,Agent }) {


  return (
    <div>
      <AgentCrdContener Agent={Agent} setSideDaat={setSideDaat} />
    </div>
  )
}
