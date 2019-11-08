const http = require('http')
const https = require('https')
const pem = require('https-pem')

const port = 8081

const start = (route) => {
    const app = http.createServer(route)
    const apps = https.createServer(pem, route)

    app.listen(port, (err) => {
        if (err) {
            console.log(err)
        }
        console.log(`HTTP server is runing on ${port}`)
    })

    apps.listen(443, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('HTTPS server is runing on 443')
    })
}

exports.start = start
