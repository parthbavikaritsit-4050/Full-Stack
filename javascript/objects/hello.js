let user={
    name:"Parth Bavikar",
    rollNo:46,
    isAdmin:true,
    languages:["marathi","hindi","english"],
    marks:{phy:88,chem:90,bio:92},
    greet:function (name){
        this.name=name;
        console.log(`hello ${name}!`);

    }
}

console.log(user.languages);//dot method
console.log(user["isAdmin"]);//bracket method
user.greet("parth");
