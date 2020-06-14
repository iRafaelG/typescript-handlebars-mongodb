// import node modules
import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';

// import routers
import IndexRouter from './routes/index';
import BooksRouter from './routes/books';

// import database
import './database';

// initializations
const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    defaultLayout: 'main',
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./libs/helpers')
}));
app.set('view engine', 'hbs');

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.use('/', IndexRouter)
app.use('/books', BooksRouter);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// start server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})