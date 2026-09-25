class Account {
    #balance = 5000;

    deposit(amount) {
        this.#balance += amount;
        console.log(`Amount Credited: ${amount}`);
        console.log(`Balance: ${this.#balance}`);
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Amount Debited: ${amount}`);
            console.log(`Remaining Balance: ${this.#balance}`);
        } else {
            console.log("Insufficient Balance");
        }
    }

    checkBalance() {
        console.log(`Account Balance: ${this.#balance}`);
    }
}

const myAccount = new Account();

myAccount.deposit(2000);
myAccount.withdraw(3000);
myAccount.checkBalance();