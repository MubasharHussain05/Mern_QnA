// A constructor function is a special function in JavaScript used to create and initialize an object. 
// When we create a constructor function with new keyword it creates a new object, sets the this keyword to that object
//  and returns object unless function explicitly to another object.

 function BankAccount(customerName,balance=0){
    this.customerName=customerName;
    this.accountNumber=Date.now()
    this.balance=balance;
f
    this.deposit=function(amount){
        this.balance +=amount
    }


    this.withdraw=function(amount){
        this.balance -=amount
    }
}

const MubashirAccount=new BankAccount('mubashir',3000)
const RazaAccount=new BankAccount('ali raza',2000)

MubashirAccount.deposit(2000)
RazaAccount.withdraw(1000)
console.log(MubashirAccount)

console.log(RazaAccount)