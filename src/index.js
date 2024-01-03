
document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form");
  
  let tasksList = document.querySelector("#tasks");
  //above i created two variable to house the ids tasks and form.
  

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let taskDescription = document.querySelector("#new-task-description").value;

    if (taskDescription !== "") {
      tasksList.innerHTML += `<li>${taskDescription}</li>`;
      document.querySelector("#new-task-description").value = "";
    }
  });
});