// script.js

let tasksVisible = false;
function goToHomePage() {

    window.location.href = "main-page.html";
}


fetch('http://localhost:8080/tasks')
    .then(response => response.json())
    .then(data => {
        updateUIWithTasks(data); // Assuming you have a function to update the UI
        console.log(data);
    })
    .catch(error => console.error('Error:', error));


function updateUIWithTasks(tasks) {
    // Assuming you have an element in your HTML to display tasks, like a <ul>
    const taskList = document.getElementById('taskList');

    // Clear existing tasks
    taskList.innerHTML = '';

    // Iterate over the tasks and add them to the UI
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task.description; // Assuming each task has a 'description' property
        taskList.appendChild(taskItem);
    });
}
    function createTask() {

        console.log("Create a Task button clicked");


        showTasksButton();
    }

    function createTimetable() {

        console.log("Create a Task button clicked");

        showTimetablesButton();
    }

    function showTasksButton() {
        var tasksButton = document.querySelector(".tasks-button");
        tasksButton.style.display = "block";
    }


    function showTasks() {

        const tasksContainer = document.querySelector('.tasks-container');
        tasksContainer.style.display = tasksContainer.style.display === 'none' ? 'block' : 'none';


        const tasksButton = document.querySelector('.tasks-button .button');
        tasksButton.classList.toggle('active-button');


        const toolsContainer = document.querySelector('.tools');
        const createTaskButton = document.getElementById('createTaskButton');
        const createFolderButton = document.getElementById('createFolderButton');
        const createTimetableButton = document.getElementById('createTimetableButton');

        if (tasksButton.classList.contains('active-button')) {
            toolsContainer.style.display = 'none';
            activateButton('tasks-button');

        } else {
            toolsContainer.style.display = 'flex';
            disactivateButton('tasks-button');
        }
    }

    function showTimetables() {

        document.querySelector('.main').innerHTML = 'Your tasks: <ul><li>Timetable 1</li><li>Timetable 2</li></ul>';
        activateButton('timetable-button');
    }

// Initialize an array to store folder elements
// Initialize an array to store folder elements
    const folderElements = [];

    function createFolder() {
        const fInput = document.getElementById('fInput');
        const folderName = fInput.value.trim();

        if (folderName) {
            const folderElement = document.createElement('button');
            folderElement.className = 'button folder';
            folderElement.textContent = folderName;
            folderElement.style.display = 'none';
            folderElement.onclick = function () {
                alert(`Clicked on folder: ${folderName}`);
            };

            const foldersContainer = document.querySelector('.folders-container');

            // Append the new folder to the existing content
            foldersContainer.appendChild(folderElement);
            closeModalF();

            // Add the created folder element to the array
            folderElements.push(folderElement);

            const foldersButton = document.querySelector('.folders-button');
            foldersButton.style.display = 'block';
        }
    }


    function showFolders() {
        const foldersContainer = document.querySelector('.folders-container');
        const foldersButton = document.querySelector('.folders-button .button');
        const toolsContainer = document.querySelector('.tools');

        foldersButton.classList.toggle('active-button');

        if (foldersButton.classList.contains('active-button')) {
            toolsContainer.style.display = 'none';
            activateButton('folders-button');
            // Show all the stored folder elements
            folderElements.forEach(folderElement => {
                folderElement.style.display = 'block';
            });
        } else {
            toolsContainer.style.display = 'flex';

            // Hide all the stored folder elements
            folderElements.forEach(folderElement => {
                folderElement.style.display = 'none';
            });
        }

        // Toggle the visibility of the folders container
        foldersContainer.style.display =
            foldersButton.classList.contains('active-button') ? 'block' : 'none';
    }

    function showTimetablesButton() {
        document.querySelector('.timetable-button').style.display = 'block';
    }

    function activateButton(buttonClass) {

        // Activate the specified button
        document.querySelector(`.${buttonClass} button`).classList.remove('inactive-button');
        document.querySelector(`.${buttonClass} button`).classList.add('active-button');
    }

    function disactivateButton(buttonClass) {

        // Activate the specified button
        document.querySelector(`.${buttonClass} button`).classList.remove('active-button');
        document.querySelector(`.${buttonClass} button`).classList.add('inactive-button');
    }

    function restoreMainContent() {
        window.location.href = "main-page.html";
    }


    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('createTaskButton').addEventListener('click', openModal);
        document.getElementById('createFolderButton').addEventListener('click', openModalF);
    });

    function openModalF() {
        document.getElementById('createFolderModal').style.display = 'block';
    }

    function closeModalF() {
        document.getElementById('createFolderModal').style.display = 'none';
    }

    function openModal() {
        document.getElementById('createTaskModal').style.display = 'block';
    }

    function closeModal() {
        document.getElementById('createTaskModal').style.display = 'none';
    }

    function saveTask() {
        const taskInput = document.getElementById('taskInput');
        const task = taskInput.value.trim();

        if (task !== '') {
            const taskList = document.getElementById('taskList');
            const taskItem = document.createElement('li');
            taskItem.textContent = task;
            taskList.appendChild(taskItem);

            closeModal();
            const tasksButton = document.querySelector('.tasks-button');
            tasksButton.style.display = 'block';
        }
}


/*function createTasksButton() {
    // Create a new list item and anchor element for the "Tasks" button
    var tasksMenuItem = document.createElement("li");
    tasksMenuItem.className = "menu-item";

    var tasksLink = document.createElement("a");
    tasksLink.href = "tasks.html"; // Update the href with the actual path to your Tasks page
    tasksLink.textContent = "Tasks";

    // Append the anchor element to the list item
    tasksMenuItem.appendChild(tasksLink);

    // Append the list item to the sidebar
    var sidebar = document.querySelector(".sidebar");
    sidebar.appendChild(tasksMenuItem);*/