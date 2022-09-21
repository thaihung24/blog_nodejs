const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const { ppid } = require('process');
const app = express();
const route = require('./routes');
const db = require('./config/db');
//Connect to database
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
//HTTP logger
app.use(morgan('combined'));
//Template engines
app.engine(
    'handlebars',
    handlebars.engine({
        extname: '.handlebars',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources', 'views'));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

//routes init
route(app);

app.listen(5000, () => {
    console.log('listening on port 5000');
});
