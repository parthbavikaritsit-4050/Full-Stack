interface practse{

id:number;
name:string
}
type requiredts=Required<practse>;

const student:requiredts={id:101};
console.log(student);


