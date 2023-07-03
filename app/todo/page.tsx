"use client";

import { useState } from "react";
import { FaGear, FaPlus, FaX } from "react-icons/fa6";

type Todo = {
  id: string,
  category: string | undefined,
  title: string,
  completed: boolean,
  date: string
}

const now = Date.now().toString();

const testTodos = [
  { id: '1', category: 'today', title: 'Learn React', completed: false, date: now },
  { id: '2', category: 'today', title: 'Build a project', completed: true, date: now },
  { id: '3', category: 'today', title: 'Deploy to production', completed: false, date: now }
]

export default function Home() {
  const initialState = {
    id: "",
    category: "",
    title: "",
    completed: false,
    date: ""
  }

  const [newTitle, setNewTitle] = useState("")
  const [newCategory, setNewCategory] = useState("")
  const [currentCategory, setCurrentCategory] = useState("")
  const [categories, setCategories] = useState<string[]>([])
  const [todos, setTodos] = useState<Todo[]>(testTodos)

  const createTodo = () => {
    if (newTitle?.trim() === '') return;
    setTodos(currentTodos => {
      return [...currentTodos,
      {
        id: crypto.randomUUID(),
        category: newCategory,
        title: newTitle,
        completed: false,
        date: Date.now().toString()
      }
      ]
    });
    setNewTitle("")
    setNewCategory("")
  };

  const deleteTodo = ((id: string) => {
    setTodos(currentTodos => currentTodos.filter(todo => todo.id !== id));
  });

  const toggleTodo = (id: string, completed: boolean) => {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed };
        };
        return todo;
      });
    })
  }

  return (

    <main>
      <div className="contents">
        <div className="flex flex-col justify-center items-center">
          <h1 className="head_text">Todo!</h1>
        </div>
        <div className="flex flex-col w-full justify-start items-start mt-5">
          <div className="w-full flex flex-row justify-between items-center">
            <label className="justify-between items-center sm:mr-3 mr-1">
              <select
                onChange={(e) => setNewCategory(e.target.value)}
                value={currentCategory}
                className=" appearance-none md:w-48 w-16 bg-gray-100 border border-gray-200 text-gray-700 p-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="">Category</option>
                {categories.length > 0 && categories.map(category => {
                  return <option value={category}>{category}</option>
                })}
              </select>
            </label>
            <div className="flex flex-1 flex-row justify-between items-center gap-3">
              <input
                type="text"
                placeholder="To do"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    createTodo();
                  }
                }}
                className="appearance-none w-full bg-gray-100 text-gray-700 border focus:border-red-500 rounded p-2 sm:mr-4 mr-1 leading-tight focus:outline-none focus:bg-white"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  createTodo();
                }}
              >
                <FaPlus />
              </button>
              {/* <div className="rounded-full border sm:w-10 sm:h-10 w-5 h-5 flex jusify-center items-center sm:p-4 p-2">
                <p className="desc text-center">
                  i
                </p>
              </div>
              <FaGear className="sm:w-9 sm:h-9 w-4 h-4 flex jusify-center items-center" /> */}
            </div>
          </div>
          <div className="flex flex-row mt-6">
            <div className="md:w-48 w-16 sm:mr-3 mr-1">
              <input
                className="appearance-none w-full bg-gray-100 text-gray-700 border rounded p-2 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Search"
              />
              <p className="desc ">
                today
              </p>
              <p className="desc text-ellipsis overflow-hidden ">
                custom categories
              </p>
            </div>
            <div className="flex-1 w-full justify-start items-start">
              {todos.length > 0 ? todos.map(todo => {
                const now = Date.now().toString()
                return (
                  <li
                    key={todo?.id + now}
                    className="list-none flex justify-start items-center my-2 gap-2"
                  >
                    <label className={(todo?.completed ? " line-through text-gray-500 " : " ") + "flex justify-start items-center gap-2"}>
                      <input
                        type="checkbox"
                        checked={todo?.completed}
                        onChange={e => toggleTodo(todo.id, e.target.checked)}
                      />
                      {todo?.title}
                    </label>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="btn btn-danger"
                    ><FaX /></button>
                  </li>
                )
              }) : (
                <p className="desc ">
                  Todo list is empty, let's create a new one!
                </p>
              )
              }
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}
