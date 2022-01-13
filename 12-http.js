const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url==='/'){
        res.end(`
        <h1>Welcome to our home pagee<h1>
        <a href="/about">About us</a>
        `)
    }
    if(req.url==='/about'){
        res.end(`
        <h1>About</h1>
        <p>Here is our short history</p>
        <a href="/">Back to homepage</a>
    `)
    }
    res.end(`
        <h1> Oops! Something went wrong</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back to homepage</a>
    `)
})

server.listen(5000)