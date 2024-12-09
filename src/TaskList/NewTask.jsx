/* eslint-disable react/prop-types */

const NewTask = ({data}) => {
  return (
    <div className="h-full w-[280px] bg-blue-800 rounded-2xl flex-shrink-0 p-5">
    <div className="flex justify-between items-center">
     <button className="py-1 px-3 bg-red-900 rounded-md">{data.category}</button>
     <p className="text-sm">{data.taskDate}</p>
    </div>
    <h1 className="text-xl font-semibold pt-3 pb-2">{data.taskTitle}</h1>
    <p className="text-base">{data.taskDesc} </p>
 </div>
  )
}

export default NewTask