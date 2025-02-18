
// Inheritance in Object Oriented Programming in JavaScript allow one class are object to acquire property and method to another one. 
// This mean you can create a new class or object based on the parent one reusing code and adding new function without modifying original. 
// In JavaScript this can be done using prototype are class syntax introduced es6, where new class extends to parent class. 
// This help is create hierarchical relationship between classes making code more modular and easier to manage.


class BankAccount{
    customerName;
    accountNumber;
    balance=0

    constructor(customerName,balance=0){
    this.customerName=customerName;
    this.accountNumber=Date.now()
    this.balance=balance;
}

    deposit(amount){
        this.balance +=amount
    }


    withdraw(amount){
        this.balance -=amount
    }
    
}
const MubashirAccount=new BankAccount('mubashir',3000)
const RazaAccount=new BankAccount('ali raza',2000)

MubashirAccount.deposit(2000)
RazaAccount.withdraw(1000)
console.log(MubashirAccount)

console.log(RazaAccount)



// CurrentAccount

class CurrentAccount extends BankAccount{
    trasactionLimit=50000

    constructor(customerName,balance=0){
        super(customerName,balance)
        // The super keyword is used to refer to the immediate parent class obect.
        // It is used to invoke the super class constructor,method, or variable from the subclass.  
    }

    takeBussinessLoan(amount){
        console.log("taing bussiness Loan" +amount)
    }
}
const Mubashir=new CurrentAccount('mubashir',4000)
const Raza=new CurrentAccount('ali raza',1000)


Mubashir.deposit(2000)
Raza.withdraw(1000)
Mubashir.takeBussinessLoan(50000)
console.log(Mubashir)

console.log(Raza)



// SavingAccount

class SavingAccount extends BankAccount{
    trasactionLimit=40000

    constructor(customerName,balance=0){
        super(customerName,balance)
    }
    
    takePersonalLoan(amount){
        console.log("taing Personal Loan" +amount)
    }
}
