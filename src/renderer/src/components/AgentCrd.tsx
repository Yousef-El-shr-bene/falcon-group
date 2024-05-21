export default function AgentCrd({ data, setSideDaat }) {
  console.log(data, 'data')

  return (
    <div
      className="rounded-lg bg-emerald-400 w-auto h-auto text-center  m-2 shadow-xl "
      onClick={() => {
        setSideDaat({ type: 'Agent', id: data.id })
      }}
    >
      <h1 className="font-bold p-2 ">{data !== undefined ? data.data.name : ''}</h1>
      <h2 className="rounded-b-lg bg-emerald-200 p-1 hover:bg-emerald-300 hover:shadow-2xl transition-all">
        start proses
      </h2>
    </div>
  )
}
