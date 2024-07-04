
const http = require("http");


const server = http.createServer((req, res) => {

    if (req.url === "/getPokemon") {
        res.setHeader(`Content-Type`, `application/json`);
        res.writeHead(200);
    
        // 200  - Ok Successful
        // 400 - error
        // 404 - not found 
    
        res.end(
            JSON.stringify(
                {
                    message: `Pika Pika!`
                }
            )
        )
    } else {

        res.writeHead(404);
        res.end("Not Found!");

    }

    

})

const port = 3000; 

server.listen(port, () => {
    console.log("Server running!");
})