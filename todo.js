function addTask() {

    // Get the input value
    let input = document.getElementById("taskInput");
    let task = input.value;

    // Check whether the input is empty
    if (task.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    let li = document.createElement("li");

    // Add task text
    li.textContent = task + " ";

    // Create Complete button
    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    completeBtn.onclick = function() {
        li.style.textDecoration = "line-through";
    };

    // Create Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function() {
        li.remove();
    };

    // Add buttons to the list item
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // Display task on the webpage
    document.getElementById("taskList").appendChild(li);

    // Clear the input field
    input.value = "";
}
