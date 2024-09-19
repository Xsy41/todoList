import { useState } from "react"



const AddTodoList = ({addTodoList}: {addTodoList: (text: string) => void}) => {

    const [inputVal, setInputVal] = useState('')


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputVal(e.target.value)
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(inputVal.trim()){
            addTodoList(inputVal)
            console.log(inputVal, '成功加入数组')
            setInputVal('')
        }
    }


    return (
        <form>
            <input type="text" value={inputVal} onChange={handleChange}/>
            <button onClick = {handleSubmit}>添加新事项</button>
        </form>
    )
}

export default AddTodoList