function bankaccount(accno,balance,amount){
    this.accno=accno;
    this.amount=amount;
    this.balance=balance;

    this.getbalance=()=>{

        console.log(this.balance);
    }

    }


bankaccount.prototype.debit=(balance,amt)=>{
        if(amt<=balance){
            console.log("Amont Debited");
            
        }
        else{
            console.log("Insufficient Balance...");
            
        }
    
}

class dummy extends bankaccount{
    
    }




// let ac1=new bankaccount(1,200,100);
// ac1.getbalance();
// ac1.debit(200);

let d1=new dummy(1,300,100,"Parth");
d1.getbalance();
d1.debit(300);