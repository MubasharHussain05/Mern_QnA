// Ploymorphism means the ability of object to take on multiple forms.
// In programming, it allow objects of different classes to be treated
// as objects of a common superclass.



class Animal {
    speak() {
        console.log("The animal makes a sound.");
    }
}


class Dog extends Animal {
    speak() {
        console.log("The dog barks.");
    }
}


class Cat extends Animal {
    speak() {
        console.log("The cat meows.");
    }
}

let animal1 = new Dog();
let animal2 = new Cat();

animal1.speak(); // Output: The dog barks.
animal2.speak(); // Output: The cat meows.
console.log(animal1)
