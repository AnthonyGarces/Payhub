require('dotenv').config();
const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const session = require('express-session');
const sessionStore = require('connect-session-sequelize');
const https = require('https');
const fs = require('fs');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const db = require('./models')


app.prepare()
    .then(() => {
        const server = express();

        server.get('*', (req, res) => {
            return handle(req, res)
        });

        server.listen(3000, (err) => {
            if (err) throw err
        })
    })
//app.post('/login',
//     passport
//         .authenticate('local', 
//         {
//             successRedirect: '/home', 
//             failureRedirect: '/login',
//             failureFlash: 'Invalid username or password'
//         }),
//     function(req, res) {
//         res.redirect('/users' + req.user.username);
//     }
// );