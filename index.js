console.log('I have no capabilities')

var net = require('net')
const fs = require('fs')

module.exports = function (cb) {
  var socket = net.connect({
    port: 80,
    host: 'nodejs.org'
  })
  // If no 'error' or 'connect' event after 5s, assume network is down
  var timer = setTimeout(function () {
    done(new Error('timeout'))
  }, 5000)
  var done = once(function (err) {
    clearTimeout(timer)
    socket.unref()
    socket.end()
    cb(!err) // eslint-disable-line standard/no-callback-literal
  })
  socket.on('error', done)
  socket.on('connect', done)

  fs.readFileSync('./foo/bar/baz')
}


 const npmPath = options.npmPath || process.env.npm_execpath //eslint
