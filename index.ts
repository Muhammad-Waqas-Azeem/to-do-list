import inquirer from "inquirer";
let todolist = [];
do {

  var addtodo = await inquirer.prompt([
    {
      name: "additem",
      message: "Enter the item to add",
      type: "input",
    },
    {
      name: "moreitem",
      message: "Do you want to add more items",
      type: "confirm",
      default: false,
    },
  ]);
  todolist.push(addtodo.additem );
  console.log(todolist);
} while (addtodo.moreitem);
