const Constants = require("./static/constants")

exports = class Mefs {
  constructor () {
    
  }
  random() {
    return Constants.random[Math.floor(Math.random() * Constants.random.length)]
  }
}
