
interface TodoListFilterProps{
    setFilter: React.Dispatch<React.SetStateAction<string>>
}
const TodoListFilter: React.FC<TodoListFilterProps> = ({setFilter}) => {

        
    return (
        <div>
            <button onClick={() => {setFilter('all')}}>all</button>
            <button onClick={() => {setFilter('completed')}}>completed</button>
            <button onClick={() => {setFilter('active')}}>active</button>

        </div>
    )
}

export default TodoListFilter