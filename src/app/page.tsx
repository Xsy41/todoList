"use client"
import { Todo } from "@/type";

import { useState } from "react";
import AddTodoList from "@/components/AddTodoList"
import ShowTodoList from "@/components/ShowTodoList"
import TodoListFilter from "@/components/TodoListFilter"

export default function Home() {
  
  const [todos, setTodo] = useState<Todo[]>([])
  const [filter, setFilter] = useState<string>('all')


  const addTodoList = (text: string) => {
    const newTodo = {
      id: todos.length,
      text: text,
      completed: false
    }
    setTodo([...todos, newTodo])
  }
  const deleteTodo = (id: number) => {
    setTodo(todos.filter(todo => todo.id != id))
  }
  const toggleTodo = (id: number) => {
    setTodo(todos.map(todo => {
      if(todo.id == id){
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  const changeFilter = () => {
    if(filter == 'all') return todos
    else if(filter == 'completed'){
      return todos.filter(todo => todo.completed)
    }
    return todos.filter(todo => !todo.completed)
  }


  return (
    <div>
      <h1>TodoList</h1>
      <AddTodoList addTodoList = {addTodoList}/>
      <ShowTodoList todos = {changeFilter()} deleteTodo = {deleteTodo} toggleTodo = {toggleTodo}/>
      <TodoListFilter setFilter = {setFilter}/>
    </div>
  );
}
