/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import FailedTask from "./FailedTask"
import NewTask from "./NewTask"

/* eslint-disable react/prop-types */
const Tasklist = ({data}) => {
  return (
    <div className="no-scrollbar mt-10 h-[40%] flex flex-nowrap gap-4 overflow-x-auto">
       {data.tasks.map((task, key)=>{
            if(task.active){
             return  <AcceptTask key={key} data={task} />
            }
            if(task.newTask){
               return <NewTask key={key} data={task} />
            }
            if(task.completed){
              return <CompleteTask key={key} data={task} />
            }
            if(task.failed){
               return <FailedTask key={key} data={task} />
            }
       })}
        </div>
  )
}

export default Tasklist