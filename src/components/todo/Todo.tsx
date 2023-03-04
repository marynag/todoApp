import { ChangeEvent, useState } from 'react'
import  {ITask} from "./interfaces";
import TodoTask from '../todoTask/TodoTask.tsx'

const Todo = () =>{
    const [task, setTask] = useState<string>("");
    const [deadLine, setDeadLine] = useState<number>(0);
    const [todo, setTodo] = useState<ITask[]>([]);

    const handleChange = (event:ChangeEvent<HTMLInputElement>) :void =>{
        if (event.target.name === "task"){
            setTask(event.target.value);
        }else{
            setDeadLine(Number(event.target.value));
        }
    }

    const addTask = ():void =>{
        const newTask = {
            taskName:task,
            deadline:deadLine
        };
        setTodo([...todo, newTask])
        setTask("");
        setDeadLine(0);
    }

    const completeTask = (taskNameToDelete:string):void =>{
        setTodo(todo.filter((task)=>{
            return task.taskName !==taskNameToDelete
        }))
    }

    return (
        <div className="App">
            <div className='header'>
                <div className='inputContainer'>
                    <input type="text"
                           placeholder='Task...'
                           name='task'
                           value={task}
                           onChange={handleChange} />

                    <input type="number"
                           placeholder='DeadLine (in days)'
                           name='deadline'
                           value={deadLine}
                           onChange={handleChange} />
                </div>
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className='todoList'>
                {todo.map((task:ITask, key:number)=>{
                    return <TodoTask key={key} task={task} completeTask={completeTask} />
                })}
            </div>
        </div>
    )
}

export default Todo