const http = require("http");
const currencyJson = require("./currency.json");
// const { url } = require("inspector");
const PORT = 8082;

const server = http.createServer((req, res) => {
    console.log("request received", req);
    const serverInfo = {
        name: "crio-server",
        version: "1.0.0",
        currendtDate: new Date().toDateString(),
        currentTime: new Date().toTimeString(),
    }

  //Activity 1
//   res.writeHead(200,{"content-type": "application.json"});
//   res.end(JSON.stringify(serverInfo));

    
    //Activity 2
    // res.writeHead(200,{"content-type": "text.html"});
    // res.write("<h1>Hello<h1>");
    // res.end("<h2>Hello<h2>");

    //Activity 3
    // if(req.url === '/status') {
    //     res.writeHead(200,{"content-type": "application.json"});
    //     res.end(JSON.stringify(serverInfo));
    // } else {
    //     res.writeHead(200,{"content-type": "text.html"});
    //     res.write("<h1>Hello<h1>");
    //     res.end("<h2>Hello<h2>");
    // }

    //Activity4
    // if(req.url === '/') {
    //     res.writeHead(200, { "content-type": "text/html"})
    //     res.write("<h1>Currency Database</h1>");
    //     res.end();
    // } else if(req.url ==='/currencies') {
    //     res.writeHead(200,{"content-type":"application/json"});
    //     res.write(JSON.stringify(currencyJson));
    //     res.end();
    // } else {
    //     res.writeHead(404,{"content-type":"application/json"});
    //     res.end(JSON.stringify({message: `Route: ${req.url} not found`}));
    // }

    switch(req.url) {
        case "/":
            res.writeHead(200, { "content-type": "text/html"})
            res.write("<h1>Currency Database</h1>");
            res.end();
            break;
        case "/currencies":
            res.writeHead(200,{"content-type":"application/json"});
            res.write(JSON.stringify(currencyJson));
            res.end();
            break;
        default:
            res.writeHead(404,{"content-type":"application/json"});
            res.end(JSON.stringify({message: `Route: ${req.url} not found`}));
    }
})

server.listen(8082, () => {
    console.log(`server running on: ${PORT}`);
});