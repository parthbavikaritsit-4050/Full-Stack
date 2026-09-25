function swap<t>(a:t,b:T){
   console.log("Brfore Swap:");
   console.log("a:",a);
   console.log("b:",b);
   
    let c=a;
    a=b;
    b=c;

   console.log("Brfore Swap:");
   console.log("a:",a);
   console.log("b:",b);
}

swap(1,2);
swap("a","b")