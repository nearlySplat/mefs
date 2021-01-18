const Constants = require("static/constants")

exports = class Mefs extends Math {
  constructor () {
    throw new Error(`The ${this.constructor.name} class may not be instantiated!`);
  }
  static random () {
    return Constants.random[super.floor(super.random() * Constants.random.length)]
  }
}
