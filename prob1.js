const http = require('http')
require('date-utils')

const server = http.createServer((req, res) => {
    const td = Date.now()
    var date = new Date(td)
    var temp = date.toFormat('YYYY-MM-DD HH24:MI:SS')
    res.write(temp)
    res.end()
})

server.listen(8080)

server.on('listening', () => {
    console.log("server is running on 8080 port.")
})