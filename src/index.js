const Constants = require("./static/constants")
class Mefs {
  constructor () {
    throw new Error(`The ${this.constructor.name} class may not be instantiated.`)
  }
  static random() {
    return Constants.random[Math.floor(Math.random() * Constants.random.length)]
  }
  static PIE = "🥧"
  static E = "E"
}

module.exports = Mefs
