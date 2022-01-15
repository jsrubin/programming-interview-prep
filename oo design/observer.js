// OBSERVER PATTERN

class ClickEventer {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(event) {
    this.observers = this.observers.filter(fn => fn !== event);
  }

  emit(o, thisObj) {
    const scope = thisObj || this;
    this.observers.forEach(fn => {
      fn.call(scope);
    });
  }
}

const e1 = () => {
  const name = "e1";
  console.log("event: ", name);
};

const e2 = () => {
  console.log("event 2");
};

const eventer = new ClickEventer();

eventer.subscribe(e1);
eventer.subscribe(e2);
eventer.emit();
setTimeout(() => {
  eventer.unsubscribe(e2);
  eventer.emit();
}, 500);
