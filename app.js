const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// connect to mongodb
const dBURI = 'mongodb+srv://ajowens314:aliceinspacefightingzombies@nodetuts.oovzcik.mongodb.net/nodetuts?retryWrites=true&w=majority';
mongoose.set('strictQuery', true);
mongoose.connect(dBURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=> app.listen(3000))
    .catch((err)=> console.log(err));


//register view engine
app.set('view engine', 'ejs');



//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));





app.get('/', (req, res) =>{

    res.redirect('/blogs')

}); 

app.get('/about', (req, res) =>{
   // res.send('<p>About Page</p>');
   res.render('about', {title: 'About'})
}); 

app.use('/blogs', blogRoutes);

app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});

