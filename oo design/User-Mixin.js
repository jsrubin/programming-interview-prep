// Mixin Pattern

class User extends Person {
  constructor(id, name = "", email = "") {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

const permissions = {
  is(role) {
    return this.roles.has(role);
  },

  can(action) {
    for (const [, role] of this.roles.entries()) {
      if (role.can(action)) {
        return true;
      }
    }

    return false;
  }
};

// copy the methods
Object.assign(User.prototype, permissions);

// now User can say hi
new User("Dude").sayHi(); // Hello Dude!
