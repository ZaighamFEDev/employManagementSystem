/* eslint-disable react/prop-types */

const CompleteTask = ({data}) => {
  return (
    <div className="h-full w-[280px] bg-green-800 rounded-2xl flex-shrink-0 p-3 md:p-5 relative">
    <div className="flex justify-between items-center">
      {data.category ? 
     <button className="py-1 px-3 bg-red-900 max-w-[150px] overflow-clip whitespace-nowrap text-ellipsis rounded-md">{data.category}</button>: null
    }
    {data.taskDate?
     <p className="text-sm">{data.taskDate}</p> 
     : null}
    </div>
    {data.taskTitle?
    <h1 className="text-xl font-semibold pt-1 mb-1 ellipsis-1">{data.taskTitle}</h1>
    : null}
    {data.taskDesc?
    <p className="text-base ellipsis-4">{data.taskDesc} </p>
    : null}
    <div className="flex gap-2 items-end justify-center w-full absolute bottom-3 left-0">
    {/* <button className="px-3 py-2 bg-green-700 rounded-md    ">complete Task</button>
    <button className="px-3 py-2 bg-red-700 rounded-md ">Failed Task</button> */}
    </div>
 </div>
  )
}

export default CompleteTask