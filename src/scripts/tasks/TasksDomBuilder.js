// 1. A 7-element form is created and appended to the DOM
//      article with id="tasksOutput" in index.html
//      (createAndAppendForm())
// 2. A list of current tasks is created and appended to
//      the DOM article with id="taskListOutput"in index.html
// ***** Stretch goal - Order the tasks by date
// 2. To create a list of current tasks for the currrent user
//       TasksList.createDomList() is called
// 3. TaskList.createDomList() calls TasksFetch.getAllTasksById()
//      for users matching the current userId and for complete = unchecked
//      Then the function does a forEach on the fetch
//  ***** Stretch goal would be adding option to show completed tasks
// 4. For each list item, TaskFetch.getAllTasksById() calls
//      TasksCreateObject.taskBuilder and returns the list object
//      (taskListField)
// 5. If the user adds a task, TasksDomBuilder.handleAddNewTask
//      takes the user input and creates a new object
//      Then it calls TaskFetch.postNewTask to POST
//      Then it calls TasksList.createDomList() to refresh the
//      list to show tasks not yet completed


import TasksFetch from "./TasksFetch"
import TasksList from "./TasksList"
import TasksCreateObject from "./TasksCreateObject";

const TasksDomBuilder = { 
    
  createAndAppendForm() {
// MAIN HEADER
    // let taskFormHeader = document.createElement("h1");
    // taskFormHeader.textContent = "TO DO LIST";
    // taskFormHeader.setAttribute("class", "headerH1");

// ADD TASKS HEADER
    let taskAddHeader = document.createElement("h2");
    taskAddHeader.textContent = "Add Tasks";
    taskAddHeader.setAttribute("class", "headerH2");

// TASK
    let taskNameField = document.createElement("article");
    taskNameField.setAttribute("class", "listItem");

    let taskNameLabel = document.createElement("label");
    taskNameLabel.textContent = "Task:  ";
    taskNameLabel.setAttribute("for", "task");

    let taskNameInput = document.createElement("input");
    taskNameInput.setAttribute("id", "task");
    taskNameInput.setAttribute("name", "task");
    taskNameField.appendChild(taskNameLabel);
    taskNameField.appendChild(taskNameInput);

// // DUE DATE
    let taskDueDateField = document.createElement("article");
    let taskDueDateLabel = document.createElement("label");
    taskDueDateLabel.setAttribute("for", "dueDate");
    taskDueDateLabel.textContent = "Date:  ";

    let taskDueDateInput = document.createElement("input");
    taskDueDateInput.setAttribute("id", "dueDate");
    taskDueDateInput.setAttribute("type", "date");
    taskDueDateInput.setAttribute("name", "dueDate");
    taskDueDateField.appendChild(taskDueDateLabel);
    taskDueDateField.appendChild(taskDueDateInput);

// SUBMIT BUTTON
    let submitButton = document.createElement("button");
    submitButton.textContent = "Add Tasks";
    submitButton.setAttribute("class", "task__save btnClass");
    // 2. Attach event listener to button in form
    submitButton.addEventListener("click", this.handleAddNewTask);

// EDIT HEADERS
    let editHeadersField = document.createElement("article")
    // editHeadersField.setAttribute("class", "listItemContainer")
    let taskEditHeader = document.createElement("h4");
    taskEditHeader.textContent = "Click Task to Edit - Check Box to Mark Complete";
    // taskEditHeader.setAttribute("class", "headerH4");
    // let taskEditHeader2 = document.createElement("h5");
    // taskEditHeader2.textContent = "Check Box to Mark Complete";
    // taskEditHeader2.setAttribute("class", "headerH5");
    editHeadersField.appendChild(taskEditHeader);
    // editHeadersField.appendChild(taskEditHeader2);

// 3. Append the HTML form to the DOM
    let taskFormFragment = document.createDocumentFragment();
    // taskFormFragment.appendChild(taskFormHeader);
    taskFormFragment.appendChild(taskAddHeader);
    taskFormFragment.appendChild(taskNameField);
    taskFormFragment.appendChild(taskDueDateField);
    taskFormFragment.appendChild(submitButton);

    let taskFormArticle = document.querySelector("#tasksOutput");
    taskFormArticle.setAttribute("class", "addContainer");
    taskFormArticle.appendChild(taskFormFragment);

    let taskFormArticleEdit = document.querySelector(".addContainer");
    //taskFormArticle.setAttribute("class", "addContainer");
    taskFormArticleEdit.appendChild(editHeadersField);

    console.log(taskFormArticle);
    TasksList.createDomList();
  },
    
  clearTaskDom() {
    console.log("Hello from TasksDomBuilder.clearDom");
    let clearHtmlDiv = document.querySelector("#pageDiv");
    let clearHtmlSection = document.querySelector("#clearSection");
    clearHtmlSection.innerHTML = `
        <article id="tasksOutput"></article>
        <article id="taskListOutput"></article>`;
    clearHtmlDiv.appendChild(clearHtmlSection);
    },
  
  handleAddNewTask() {
    let inputTaskName = document.querySelector("#task").value
    let inputTaskDueDate = document.querySelector("#dueDate").value
    let inputComplete = "unchecked";
    
        // "tasks": [ {
        //       "id": 1,
        //       "userId": 1,
        //       "task": "Take out garbage",
        //       "dueDate": "12/12/2018",
        //       "complete": "" - attribute: is checked - value = "checked"?
        //   }  ],

// Until we pass in a value
let userId = 1;
    let newTask = {
      userId: userId,
      task: inputTaskName,
      dueDate: inputTaskDueDate,
      complete: inputComplete
    }
    TasksFetch.postNewTask(newTask)
    .then(response => {
        TasksList.createDomList()
    })
},
}

 export default TasksDomBuilder