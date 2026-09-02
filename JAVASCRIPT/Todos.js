const todosContainer = document.querySelector("#todos-container");
const API_URL = "https://dummyjson.com/todos";

//! create a async function to call an API
async function fetchTodos() {
  try {
    let resp = await fetch(API_URL);
    let data = await resp.json();
    displayTodos(data.todos); // sending data as arguements
  } catch (error) {
    console.log(error);
  }
}
fetchTodos();

//! create a function to display todos on ui
function displayTodos(allTodos) {
  console.log(allTodos);

  allTodos.forEach((ele) => {
    const todoDiv = document.createElement("div");

    todoDiv.className = "todo";
    
    todoDiv.innerHTML = ` <h2>${ele.todo}</h2> 
    <button>Edit</button>
    <button>Delete</button>
    `;
    
    console.log(todoDiv);
    todosContainer.append(todoDiv);
  });

}