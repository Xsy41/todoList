import { Todo } from "@/type";

interface TodoListItemProps{
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
    todo: Todo
}

const TodoListItem: React.FC<TodoListItemProps> = ({todo, deleteTodo, toggleTodo}) => {
    return <div>
        <span style = {{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</span>
        <button onClick={() => toggleTodo(todo.id)}>切换</button>
        <button onClick={() => deleteTodo(todo.id)}>删除</button>
    </div>
}
export default TodoListItem