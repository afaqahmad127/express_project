const express = require('express'); // server software
const bodyParser = require('body-parser'); // parser middleware
const getResources = require('./controllers/resources');
const app = express();
app.use('/assets', express.static(__dirname + '/assets'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
const Res = require('../models/resource'); // 
var multer = require('multer');



app.use('/resource', getResources);

app.get('/blogs/view', async (req, res) => {
    res.render('resource/view')
});
app.get('/', async (req, res) => {

    try {
        // console.log('req -> ',req);
        await Res.find().then(function (ninja) {

            var oj = JSON.stringify(ninja);
            var hh = JSON.parse(oj)

            res.render('resource/table', { data: hh })
        })


        // res.send(users);

    } catch (error) {
        console.log(error.message);
    }


});
router.get('/delete/:id', async (req, res) => {
    Res.findByIdAndDelete(req.params.id, function (err) {
        if (err) {
            res.send('error in deleting ');
        } else {
            res.redirect(301, "/resource/table");
        }
    });
})



// assign port
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`This app is listening on port ${port}`));