import inquirer from "inquirer";

let todolist: any[] = [];

async function manageTodoList() {
  do {
    const action = await inquirer.prompt({
      name: "action",
      message: "What would you like to do?",
      type: "list",
      choices: ["Add item", "Remove item", "Exit"],
    });

    switch (action.action) {
      case "Add item":
        await addItem();
        break;
      case "Remove item":
        await removeItem();
        break;
      case "Exit":
        console.log("Exiting...");
        return;
    }
  } while (true);
}

async function addItem() {
  const addtodo = await inquirer.prompt([
    {
      name: "additem",
      message: "Enter the item to add",
      type: "input",
    },
  ]);
  todolist.push(addtodo.additem);
  console.log("Item added successfully!");
  console.log(todolist);
}

async function removeItem() {
  if (todolist.length === 0) {
    console.log("Todo list is empty!");
    return;
  } else {
    const removeItem = await inquirer.prompt([
      {
        message: "Enter the index of the item to remove:",
        type: "number",
        name: "index",
      },
    ]);
    if (removeItem.index >= 0 && removeItem.index < todolist.length) {
        const removedItem = todolist.splice(removeItem.index, 1);
        console.log(`Removed item: ${removedItem}`);
        console.log("Updated todo list:");
        console.log(todolist);
    } 
    else {
      return console.log("Please enter a valid index");
    }
  }
}

manageTodoList();
