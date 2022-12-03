import { format } from "path"
import { v4 as uuidV4 } from "uuid"

type Todo = { 
  id: string,
  description: string
  completed: boolean
  date: string
}

// määritellään elementtien tyypit
const list = document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("new-todo-form") as HTMLFormElement | null
const inputDesc = document.querySelector<HTMLInputElement>("#new-todo-desc")
const inputDate = document.querySelector<HTMLInputElement>("#new-todo-date")

const todos: Todo[] = loadTodos()
todos.forEach(addListItem)

form?.addEventListener("submit", e => {
  e.preventDefault()

  if (inputDesc?.value == "" || inputDesc?.value == null) return // undefined
  if (inputDate?.value == "" || inputDate?.value == null) return

  // todo olion määritys
  const newTodo: Todo = {
    id: uuidV4(), // luo todolle id:n
    description: inputDesc.value,
    completed : false,
    date: inputDate.value
  }
  todos.push(newTodo) // tallennetaan uusi todo listaan.

  addListItem(newTodo)
  inputDesc.value = ""
  inputDate.value = ""

})

function addListItem(todo: Todo) {  // add new todo which type is Todo
  const li = document.createElement("li")
  const pvm = document.createElement('h4')
  const label = document.createElement("label")
  const checkbox = document.createElement("input")
  checkbox.addEventListener("change", () => {
    todo.completed = checkbox.checked 
    saveTodos()
  })

  checkbox.type = "checkbox"
  checkbox.checked = todo.completed
  label.append(todo.date, " - ", todo.description, "  ", checkbox)
  li.append(pvm, label)
  list?.append(li)
}

function saveTodos() {  // tallentaa todot localstorageen
  localStorage.setItem("TODOS", JSON.stringify(todos))
}

function loadTodos(): Todo[] {  // hakee todot local storagesta
  const todoJSON = localStorage.getItem("TODOS")
  if (todoJSON == null) return []
  return JSON.parse(todoJSON)
}