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
  static pow (power, ...nopower) {
    if (!power || !nopower) throw new Error(`Expected two or more arguments, got ${power ? "one" : "none"}.`);
    return `${power} HAS POWERR` + nopower ? `,\n\n${nopower.map((v, i, a) => i == (a.length - 1) ? v : i == (a.length - 2) ? `${v} and ` : `${v}, `).join("")} do not :(` : "";
  }
}

module.exports = Mefs
