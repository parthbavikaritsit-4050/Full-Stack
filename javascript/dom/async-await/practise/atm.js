function atm(balance,withdrawl){
    
     return new Promise((resolve, reject) => {
        if(withdrawl<=balance){
            resolve(`Amount ${withdrawl} debited from your account remeaning balance ${balance-withdrawl}`);
        }

        else{
            reject("Insufficient Balance")
        }
    })
}

atm(3000,1000)
.then(reap=>console.log(reap))
.catch(err=>console.log(err))



