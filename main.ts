import inquirer from "inquirer";

let myBalance = 20000;
let pin = 6666;

let pincheck = await inquirer.prompt([
  {
    name: "pinCode",
    message: "Enter your pin",
    type: "number",
  },
]);

if (pincheck.pinCode === pin) {
  console.log("Your Pin Code Is Correct!!!");

  let operation = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "Slect One Option",
      choices: ["withdraw", "check balance"],
    },
  ]);

  console.log(operation);
  if (operation.operation === "withdraw") {
    let amount = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter Your Ammount",
        type: "number",
      },
    ]);

    myBalance -= amount.amount;
    console.log("your remmaining balance is " + myBalance);
  } else if (operation.operation === "check balance") {
    console.log("your balance is" + myBalance);
  }
} else {
  console.log("Your Pin Code Is Incorrect!!!");
}
