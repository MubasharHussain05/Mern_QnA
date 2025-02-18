// In JavaScript, encapsulation means keeping the internal details of an object hidden from the outside world. 
// It involves bundling the data (properties) and the methods (functions) that operate on that data into a single unit, 
// such as an object or class, and controlling access to that data by using techniques like private variables or methods.


class BankAccount{
    customerName;
    accountNumber;
    #balance=0

    constructor(customerName,balance=0){
    this.customerName=customerName;
    this.accountNumber=Date.now()
    this.#balance=balance;
}

    deposit(amount){
        this.#balance +=amount
    }


    withdraw(amount){
        this.#balance -=amount
    }

    set balance(amount){
        if(isNaN(amount)){
            throw new Error('amount is Invalid')
        }
        this.#balance=amount
    }

    get balance() {
        return this.#balance
    }
    
}
const MubashirAccount=new BankAccount('mubashir',3000)
const RazaAccount=new BankAccount('ali raza',2000)

// MubashirAccount.#balance='hello'
MubashirAccount.balance=50000
// console.log(RazaAccount.balance(1000))

console.log(MubashirAccount)



// CurrentAccount

class CurrentAccount extends BankAccount{
    trasactionLimit=50000

    constructor(customerName,balance=0){
        super(customerName,balance)
    }

    #calculateInterest(){
        console.log('calculated intest')
    }

    takeBussinessLoan(amount){
        this.#calculateInterest(amount)
        console.log("taing bussiness Loan" +amount)
    }
}
const Mubashir=new CurrentAccount('mubashir',4000)
const Raza=new CurrentAccount('ali raza',1000)


// Mubashir.deposit(2000)
// Raza.withdraw(1000)
// Mubashir.takeBussinessLoan(50000)
// console.log(Mubashir)
Raza.takeBussinessLoan(50000)

console.log(Raza)
