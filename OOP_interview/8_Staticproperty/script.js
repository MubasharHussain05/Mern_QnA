// A static belong to class rather than any spescific instanceof.
// It can be called on the class itself without the need to create
// an instance of the class.

class User{
    constructor(name,age){
        this.name=name
        this.age=age

    }
    static compareByAge(user1,user2){
        return user1.age-user2.age
    }
}

const user1=new User('Mubashar',30)
const user2=new User('Hussain', 23)
const user3=new User('Ali',27)


const users=[user1,user2,user3]

users.sort(User.compareByAge)
console.log(users)
console.log(user1,user2,user3)

