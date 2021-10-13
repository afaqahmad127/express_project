const express = require('express'); // server software
const bodyParser = require('body-parser'); // parser middleware
const getResources = require('./controllers/resources');
const app = express();
app.use('/assets', express.static(__dirname + '/assets'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/resource', getResources);

app.get('/blogs/view' , async (req , res)=>{
    res.render('resource/view')
});

  

// assign port
const port = 8080;
app.listen(port, () => console.log(`This app is listening on port ${port}`));  