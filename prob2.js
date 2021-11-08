const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)
    var temp = req.url;
    var spli = temp.split("/");
    const op = spli[1];
    const a = Number(spli[2]);
    const b = Number(spli[3]);
    var result;
    if(op == "add"){
        result = a + b;
    }
    else if(op == "sub"){
        result = a - b;
    }
    else if(op == "mul"){
        result = a * b;
    }
    else if(op == "div"){
        result = a / b;
    }
    result = String(result);
    res.write(result);
    res.end()
})

server.listen(8080)

server.on('listening', () => {
    console.log("Server is running on 8080 port.")
})