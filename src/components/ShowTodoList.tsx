import { Todo } from "@/type";
import TodoListItem from "./TodoListItem";


interface ShowTodoListProps{
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
    todos: Todo[]
}

const ShowTodoList: React.FC<ShowTodoListProps> = ({todos, deleteTodo, toggleTodo}) => {   
    return (
        <div>
            <ul>
                {todos.map(todo => {
                    return <TodoListItem key = {todo.id} todo={todo} deleteTodo = {deleteTodo} toggleTodo = {toggleTodo}/>
                })}       
            </ul>
        </div>
    )
}

export default ShowTodoList;