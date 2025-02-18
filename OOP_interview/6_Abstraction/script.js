//  Abstraction is process of hidding the implementation details and
//  showing only the necessary feature of the object.It helps to reduce
//  programming complexity and efforts.


class Car {
    #engineStatus = 'off'; // private field
    
    constructor(brand, model) {
      this.brand = brand;  // public field
      this.model = model;  // public field
    }
  
    startEngine() {
      this.#engineStatus = 'on';
      console.log("Engine started.");
    }
  
    stopEngine() {
      this.#engineStatus = 'off';
      console.log("Engine stopped.");
    }
  
    drive() {
      if (this.#engineStatus === 'on') {
        console.log(`${this.brand} ${this.model} is driving.`);
      } else {
        console.log("Start the engine first.");
      }
    }
  }
  
  // Usage
  const myCar = new Car('Honda', 'Civic');
  myCar.drive();           // Output: Start the engine first.
  myCar.startEngine();      // Output: Engine started.
  myCar.drive();            // Output: Honda Civic is driving.
  console.log(myCar)
  