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
  static pow (...data) {
    if (!data[1]) throw new Error(`Expected two or more arguments, got ${data[0] ? "one" : "none"}.`);
    data = data.map(v => typeof v == "number" ? v.toString() : v)
    return `${data[0]} HA${["i", "you", "they"].includes(data[0].toLowerCase()) ?  "VE" : "S"} POWERR,\n\n${data.slice(1).map((v, i, a) => i == (a.length - 1) ? v : i == (a.length - 2) ? `${v} and ` : `${v}, `).join("")} do${data.slice(1).length == 1 && data.every(v => !["i", "you", "they"].includes(v.toLowerCase())) ? "es" : ""} not :(`;
  }
}

module.exports = Mefs
