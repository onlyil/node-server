const url = require('url')
const fs = require('fs')
const path = require('path')
const controller = require('./controller')

const routes = {
    '/': controller.home,
    '/about': controller.about,
    '/upload': controller.upload,
}

const staticServierDirs = [
    '/static',
]

const route = (req, res) => {
    const pathname = url.parse(req.url).pathname
    const fileName = path.resolve(__dirname, `..${pathname}`)
    console.log("Route a request for " + pathname)
    if (typeof routes[pathname] === 'function') {
        // 路由
        routes[pathname](req, res);
    } else if (fs.existsSync(fileName)) {
        // 静态文件服务
        fs.createReadStream(fileName).pipe(res)
    } else {
        console.log(`No controller found for ${pathname}`)
        res.writeHead(404)
        res.end('404 Not Found')
    }
}

exports.route = route
