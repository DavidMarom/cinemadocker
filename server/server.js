const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const app = express()
const http = require('http').createServer(app);

// Express App Config
app.use(cookieParser())
app.use(bodyParser.json());



app.use(express.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    };
    app.use(cors(corsOptions));
}

const showRoutes = require('./api/show/show.routes')
const movieRoutes = require('./api/movie/movie.routes')
const tmdbRoutes = require('./api/tmdb/tmdb.routes')

//routes
app.use('/api/show', showRoutes)
app.use('/api/movie', movieRoutes)
app.use('/api/tmdb', tmdbRoutes)

app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

const port = process.env.PORT || 3030;
http.listen(port, () => { console.log('Server is running on port: ' + port)});