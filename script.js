const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
  const inputIsValid = validateInput();

  if (!inputIsValid) {
    return inputElement.classList.add("error");
  }
};

addTaskButton.addEventListener("click", () => handleAddTask());
