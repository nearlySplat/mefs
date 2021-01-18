const Constants = require("./static/constants")
class Mefs {
  constructor () {
    
  }
  random() {
    return Constants.random[Math.floor(Math.random() * Constants.random.length)]
  }
}

module.exports = Mefs
