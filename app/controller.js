const exec = require('child_process').exec

const home = (req, res) => {
    console.log('Controller home was called.')
    exec('ls -al', (err, stdout) => {
        res.end(stdout)
    })
}

const about = (req, res) => {
    console.log('Controller about was called.')
    res.end('Hello about')
}

const upload = (req, res) => {
    console.log('Controller upload was called.')
    res.end('Hello upload')
}

module.exports = {
    home,
    about,
    upload,
}
