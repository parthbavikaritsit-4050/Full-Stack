class EmployeeDashboard {
    constructor(id, password) {
        this.id = id;
        this.password = password;
    }

    login(userPassword) {
        return new Promise((resolve, reject) => {
            if (userPassword === this.password) {
                resolve("Login Successful");
            } else {
                reject("Invalid Password");
            }
        });
    }

    async fetchData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        return await response.json();
    }

    logout() {
        return "Logged Out";
    }

    async display() {
        try {
            const login = await this.login(123);
            console.log(login);

            const users = await this.fetchData();

            users.forEach(user => {
                console.log(user.name);
                console.log(user.email);
                console.log(user.username);
                console.log("----------------");
            });

            console.log(this.logout());

        } catch (err) {
            console.log(err);
        }
    }
}

const emp1 = new EmployeeDashboard("Parth1", 123);
emp1.display();