document.getElementById('add-btn').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value;
  
    if (todoText.trim() !== '') {
      const todoList = document.getElementById('todo-list');
      const li = document.createElement('li');
      li.textContent = todoText;
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.onclick = function() {
        todoList.removeChild(li);
      };
  
      li.appendChild(deleteBtn);
todoList.appendChild(li);

todoInput.value = '';
    }
})