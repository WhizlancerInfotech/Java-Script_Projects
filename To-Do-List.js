<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background: #f5f5f5;
        }
        .container {
            max-width: 400px;
            margin: 50px auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        input {
            width: 70%;
            padding: 10px;
            margin: 10px 0;
        }
        button {
            padding: 10px;
            background: green;
            color: white;
            border: none;
            cursor: pointer;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            border-bottom: 1px solid #ddd;
        }
        .delete {
            background: red;
            color: white;
            border: none;
            padding: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>To-Do List</h2>
        <input type="text" id="taskInput" placeholder="Enter a task">
        <button onclick="addTask()">Add</button>
        <ul id="taskList"></ul>
    </div>

    <script>
        function addTask() {
            let taskInput = document.getElementById("taskInput");
            let taskList = document.getElementById("taskList");

            if (taskInput.value.trim() === "") return;

            let li = document.createElement("li");
            li.innerHTML = taskInput.value + " <button class='delete' onclick='removeTask(this)'>X</button>";

            taskList.appendChild(li);
            taskInput.value = "";
        }

        function removeTask(button) {
            button.parentElement.remove();
        }
    </script>
</body>
</html>
