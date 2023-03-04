import {ITask} from "../../interfaces";
import './todoTask.css';

interface Props{
    task:ITask;
    completeTask(taskNameToDelete:string):void;
}

const TodoTask = ({task, completeTask}:Props) => {
    return (
        <div className='task'>
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button className='buttonRemoveTask' onClick={()=>{
                completeTask(task.taskName);
            }}>X</button>
        </div>
    );
}

export default TodoTask;