  
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')


let urlencodedParser = bodyParser.urlencoded({extended:false})
app.use(cookieParser('BNK'))
app.use(express.static('./web'));

app.get('/getCK', (req,res) =>{
    res.send('Yeahhh : ' + req.cookies.name + req.cookies.card)
})
app.get('/setCK', (req,res) => {
    res.cookie('card', 500)
    res.cookie('name', 'Napat')
    res.send('New add cookies')
})
app.post('/add', urlencodedParser,(req,res) => {
    let result = parseInt(req.body.a) + parseInt(req.body.b)
    res.send(result.toString())

})
app.get('/', (req,res) =>{
    res.send('Hello world' + req.query.foo)
})

app.listen(8000 ,() => {console.log('Server is running PORT 8000')})



/*app.get('/computer', function(req, res){
   res.render('computer', {computer: [{title:'Windows',image:"Windows.jpg"},
   								{title:'OSX',image:"OSX.jpg"},
   								{title:'Android',image:"Android.jpg"},
   								{title:'IOS',image:"IOS.jpg"} ] , foo: '007'})
})*/



//app.use(express.static(__dirname + '/image'));
//app.set('views', './views')
//app.set('view engine', 'ejs')