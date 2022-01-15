class Car {
  constructor(props) {
    this.make = props.make;
    this.model = props.model;
    this.color = props.color;
  }

  start() {
    console.log("start");
  }
  stop() {
    console.log("start");
  }
}

class Tesla extends Car {
  constructor(props) {
    super(props);
  }

  autoPilot() {
    console.log("self driving");
  }
}

const modelS = new Tesla({
  make: "Telsa",
  model: "ModelS",
  color: "Fire Engine Red"
});
console.log(`${modelS.make} : ${modelS.model} - ${modelS.color}`);
modelS.start();
modelS.autoPilot();
modelS.stop();
