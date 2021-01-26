const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

app.get('/', (req, res) => {
    console.log(req.cookies)
    let existingCookie = req.cookies['my_cookie']

    if(existingCookie) {
        res.cookie('my_cookie', 'true').send('<h1>Good to see you again bro!</h1>')
    } else {
        res.cookie('my_cookie', 'false').send('<h1>Hello stranger...</h1>')

    }
})

app.listen(5000, () => {
    console.log('App is running')
})