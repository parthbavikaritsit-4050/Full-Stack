const read = require("readline-sync");

// Global Variable
let balance = 10000;

// Function to Check Balance
function checkBalance() {
    console.log(`Current Balance: ₹${balance}`);
}

// Function to Deposit Money
function deposit(amount) {
    balance += amount;

    console.log(`₹${amount} deposited successfully!`);
    console.log(`Updated Balance: ₹${balance}`);
    console.log(`Date & Time: ${new Date().toLocaleString()}`);
}

// Function to Withdraw Money
function withdraw(amount) {
    if (amount > balance) {
        console.log("Insufficient Balance!");
        return;
    }

    balance -= amount;

    console.log(`₹${amount} withdrawn successfully!`);
    console.log(`Remaining Balance: ₹${balance}`);
    console.log(`Date & Time: ${new Date().toLocaleString()}`);
}

// Main Menu
while (true) {
    console.log("\n===== ATM MENU =====");
    console.log("1. Check Balance");
    console.log("2. Deposit");
    console.log("3. Withdraw");
    console.log("4. Exit");

    let choice = read.question("Enter your choice: ");

    switch (choice) {
        case "1":
            checkBalance();
            break;

        case "2":
            let depositAmount = Number(
                read.question("Enter amount to deposit: ")
            );

            if (depositAmount > 0) {
                deposit(depositAmount);
            } else {
                console.log("Invalid amount!");
            }
            break;

        case "3":
            let withdrawAmount = Number(
                read.question("Enter amount to withdraw: ")
            );

            if (withdrawAmount > 0) {
                withdraw(withdrawAmount);
            } else {
                console.log("Invalid amount!");
            }
            break;

        case "4":
            console.log("Thank you for using ATM!");
            process.exit();

        default:
            console.log("Invalid Choice!");
    }
}