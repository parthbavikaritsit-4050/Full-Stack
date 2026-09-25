type User = {
    id: number;
    name: string;
    email: string;
    password: string;
};

// Create a new type without the password property
type UserWithoutPassword = Omit<User, "password">;

const user: UserWithoutPassword = {
    id: 101,
    name: "Parth",
    email: "parth@gmail.com",
   
};

console.log("ID:", user.id);
console.log("Name:", user.name);
console.log("Email:", user.email);

// ❌ Error: Property 'password' does not exist
// console.log(user.password);