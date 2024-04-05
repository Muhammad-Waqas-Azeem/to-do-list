#! /usr/bin/env node
import inquirer from "inquirer";
let todolist = [];
async function manageTodoList() {
    do {
        const action = await inquirer.prompt({
            name: "action",
            message: "What would you like to do?",
            type: "list",
            choices: ["Add item", "Remove item", "Change item", "Exit"],
        });
        switch (action.action) {
            case "Add item":
                await addItem();
                break;
            case "Remove item":
                await removeItem();
                break;
            case "Change item":
                await changeItem();
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
    }
    else {
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
async function changeItem() {
    if (todolist.length === 0) {
        console.log("Todo list is empty!");
        return;
    }
    else {
        const changeItem = await inquirer.prompt([
            {
                message: "Enter the index of the item you want to change:",
                type: "number",
                name: "index",
            },
        ]);
        if (changeItem.index >= 0 && changeItem.index < todolist.length) {
            const change = await inquirer.prompt({
                message: "Enter the  item  to change:",
                type: "input",
                name: "changeditem",
            });
            todolist[changeItem.index] = change.changeditem;
            console.log("Updated todo list:");
            console.log(todolist);
        }
        else {
            return console.log("Please enter a valid index");
        }
    }
}
manageTodoList();
