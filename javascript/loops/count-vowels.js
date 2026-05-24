
let i=0;
let count=0;
s="economics"
do{
    if(s[i]=="a"||s[i]=="e"||s[i]=="i"||s[i]=="o"||s[i]=="u"){
        count++;
    }
    i++;
    
} while(i<s.length);

    console.log(count);