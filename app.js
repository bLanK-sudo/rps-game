const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')
let count = 0
app.get('/', (req, res) =>{
    
    res.render('home', {count})
})
function reset(reset){
    if(reset == "RESET COUNT"){
        count = 0
    }
}
function game(result){
    if(result == "YOU WIN"){
        count++
    }
}
app.post('/', (req, res) => {
    const result = req.body.title
    game(result)
    res.render('home', {count})
})
app.post('/reset', (req, res) => {
    const re = req.body.count0
    reset(re)
    res.redirect('/')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))