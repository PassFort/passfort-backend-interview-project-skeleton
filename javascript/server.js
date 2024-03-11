import express from 'express'

function createServer(port=8000) {
    const app = express()
    const server = app.listen(port,() => {
        console.log(`Listen port ${port}`)
    })

    app.get('/hello_world', (req,res) => {
        res.status(200)
        res.send('Hello World!')
    })

    return server
}


export default createServer