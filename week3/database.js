const fs = require('fs')

const save = function (filename, data) {
  fs.writeFile(filename, JSON.stringify(data))
}

const load = function (filename, handler) {
  fs.readFile(filename, 'utf8', (err, file) => {
    if (err) {
      console.log('hey, there is a readerror', err)
      handler(err)
      return
    }
    handler(null, JSON.parse(file));
  })
}



module.exports = { save, load }
