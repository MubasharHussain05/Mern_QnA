// In JavaScript prototype is an object from which other object inherits properties. 
// Every JavaScript object has a prototype which acts as template objects. 
// When you create a new object it inherits property and method from its prototype. 
// This is the key feature of JavaScript object oriented programming, 
// enabling inheritance and shared property among objects.


function BankAccount(customerName,balance=0){
    this.customerName=customerName;
    this.accountNumber=Date.now()
    this.balance=balance;

    // this.deposit=function(amount){
    //     this.balance +=amount
    // }


    // this.withdraw=function(amount){
    //     this.balance -=amount
    // }
}

const MubashirAccount=new BankAccount('mubashir',3000)
const RazaAccount=new BankAccount('ali raza',2000)

BankAccount.prototype.deposit=function(amount){
    this.balance +=amount
}

BankAccount.prototype.withdraw=function(amount){
    this.balance -=amount
}

MubashirAccount.deposit(2000)
RazaAccount.withdraw(1000)
console.log(MubashirAccount)

console.log(RazaAccount)