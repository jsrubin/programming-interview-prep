// bind test
const context = "blue";

const test = () => {
  const context = "blue";

  const button = {
    // Object literal
    context: "red",
    click() {
      console.log(this.context);
    }
  };

  const globalClick = button.click;
  globalClick(); // global context ie. window

  const functionClick = button.click.bind(this);
  functionClick(); // function context

  const blockClick = button.click.bind(button);
  blockClick(); // block context
};
// test();

// class pattern
class Game {
  constructor(players, title) {
    this.players = players;
    this.title = title;
  }

  start() {
    console.log(`start game ${this.title} with ${this.players} players`);
  }

  end() {
    console.log("end game");
  }
}

const PacmanMoves = {
  left() {
    console.log("move left");
  },

  right() {
    console.log("move right");
  }
};

// const Pacman = new Game(1, "Pacman");
// const PlayPacman = Object.assign(Pacman, PacmanMoves); // mixin pattern

// PlayGame.start();
// PlayGame.left();
// PlayGame.end();

// Observer
/*
    example Redux
    redux vs context - kinda like quicksort vs mergesort
*/
function Observer() {
  this.eventList = [];

  return {
    subscribe: fn => {
      this.eventList.push(fn);
      console.log("subscribe");
    },
    unsubscribe: fn => {
      this.eventList = this.eventList.filter(event => event != fn);
      console.log("unsubscribe");
    },

    fire: e => {
      console.log("notify");
      this.eventList.forEach(event => {
        event.call(e || this);
      });
    }
  };
}

const event1 = () => {
  console.log("event1");
};

// const o = new Observer();
// o.subscribe(event1);
// o.fire();
// o.unsubscribe(event1);
// o.fire();

// Quicksort
const quick = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  const smaller = arr.filter(a => a < pivot);
  const larger = arr.filter(a => a > pivot);

  return [...quick(smaller), pivot, ...quick(larger)];
};

// console.log(quick([5, 1, 2, 3, 6, 7, 8]));

const _mergesort = (first, second) => {
  // [1,5] [2,3]
  let merged = [];
  while (first.length && second.length) {
    merged.push(first[0] > second[0] ? second.shift() : first.shift());
  }
  if (first.length > 0) {
    merged.push(...first);
  }
  if (second.length > 0) {
    merged.push(...second);
  }
  return merged;
};

const merge = arr => {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const first = merge(arr.slice(0, mid));
  const second = merge(arr.slice(mid));

  return _mergesort(first, second);
};

console.log("sorted: ", merge([5, 1, 2, 3, 8, 7, 6]));
