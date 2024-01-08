const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end(`<a href="/about"><button>Click Here</button></a>`)
    } else if (req.url === '/about') {
        res.end('<a><p> This paragraph is all about "About". </p></a>')
    } else {
        res.writeHeader(404, {'Content-Type': 'text/html'})
        res.write(
            `<h1>Oops! This page is not available.<h1/>
            <a href="/">Back to home</a>`
        )
        res.end()
    }
})

server.listen(5000, () => {
    console.log('Server is listening on port 5000')
})
