// Classes follow the concept of object oriented programming enabling multiple objects with similar characteristics 
// each having its own unique properties and behavior while sharing common functionality. 
// Classes make it easier to organize and manage code especially when we are dealing with complex systems. 
// In JavaScript Class is a blueprint for creating an object.


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