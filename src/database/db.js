const mongoose = require('mongoose')

function connect() {
  mongoose.connect("mongodb://127.0.0.1:27017/api-restful", {
   useNewUrlParser: true,
   useUnifiedTopology: true
  })
}


module.exports = {
  connect
}
