const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const path = require('path')

const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.engine('hbs', exphbs.engine({
    defaultLayout: 'index',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, '../views/layouts'),
    partialsDir : path.join(__dirname , '../views/partials'),
}))

app.set('view engine', 'hbs');

app.get('/', function(req, res){
    res.render('main', {
        title: 'Demo Portfolio',
        name: 'Mahnoor Babar'
    })
})

app.get('/projects', function(req, res){
    res.render('projects', {
        title: 'Demo Portfolio',
        name: 'Mahnoor Babar'
    })
})

app.get('/contact', function(req, res){
    res.render('contact', 
        console.log('inside contact')
    )
})

app.listen(8080, ()=> {
    console.log("Server is running on port 8080")
})