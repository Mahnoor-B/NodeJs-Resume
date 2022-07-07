const express = require('express')
const http = require('http')
const exphbs = require('express-handlebars')
const app = express()
const path = require('path')
var url = require('url');
var fs = require('fs');

// const server = http.createServer(function (req, res) {
//     var q = url.parse(req.url, true);
//     var filename = "." + q.pathname;
//     fs.readFile(filename, function(err, data) {
//       if (err) {
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         return res.end("404 Not Found");
//       } 
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       return res.end();
//     });
//   })

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

app.listen(process.env.PORT || 8080, ()=> {
    console.log("Server is running on port 8080")
})