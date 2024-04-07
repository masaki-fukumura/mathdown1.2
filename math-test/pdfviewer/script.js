const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");

todoInput.oninput = () => {
  addButton.disabled = todoInput.value === "";
};

addButton.onclick = () => {
  const todoItem = document.createElement("li");
  const todoText = document.createElement("span");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  todoText.textContent = todoInput.value;
  todoInput.value = "";
  addButton.disabled = true; // value への代入は oninput イベントを発火しない
  editButton.textContent = "編集";
  editButton.onclick = () => {
    const input = prompt("新しい内容を入力してください");
    // prompt 関数は入力された文字列が空の場合は空文字列 ("")、キャンセルされた場合は null を返す
    if (input !== "" && input !== null) todoText.textContent = input;
  };
  deleteButton.textContent = "削除";
  deleteButton.onclick = () => {
    todoList.removeChild(todoItem);
  };
  todoItem.appendChild(todoText);
  todoItem.appendChild(editButton);
  todoItem.appendChild(deleteButton);
  todoList.appendChild(todoItem);
};