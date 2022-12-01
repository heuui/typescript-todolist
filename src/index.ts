import { v4 as uuidV4 } from "uuid"

type Todo = { 
  id: string,
  description: string
  completed: boolean
  creation_date: Date
}

// määritellään elementtien tyypit
const list = document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("new-todo-form") as HTMLFormElement | null
const inputDesc = document.querySelector<HTMLInputElement>("#new-todo-desc")

const todos: Todo[] = loadTodos()
todos.forEach(addListItem)

form?.addEventListener("submit", e => {
  e.preventDefault()

  if (inputDesc?.value == "" || inputDesc?.value == null) return // undefined

  // todo olion määritys
  const newTodo: Todo = {
    id: uuidV4(), // luo todolle id:n
    description: inputDesc.value,
    completed : false,
    creation_date: new Date(),
  }
  todos.push(newTodo) // tallennetaan uusi todo listaan.

  addListItem(newTodo)
  inputDesc.value = ""

})

function addListItem(todo: Todo) {  // add new todo which type is Todo
  const item = document.createElement("li")
  const label = document.createElement("label")
  const checkbox = document.createElement("input")
  checkbox.addEventListener("change", () => {
    todo.completed = checkbox.checked 
    saveTodos()
  })
  checkbox.type = "checkbox"
  checkbox.checked = todo.completed
  label.append(checkbox, todo.description)
  item.append(label)
  list?.append(item)
}

function saveTodos() {  // tallentaa todot localstorageen
  localStorage.setItem("TODOS", JSON.stringify(todos))
}

function loadTodos(): Todo[] {  // hakee todot local storagesta
  const todoJSON = localStorage.getItem("TODOS")
  if (todoJSON == null) return []
  return JSON.parse(todoJSON)
}