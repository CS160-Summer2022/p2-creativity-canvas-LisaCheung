/*
Node + Express Example code for CS160 Summer 2022
Prepared by Shm Garanganao Almeda 

Code referenced from: 
https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module"
https://expressjs.com/en/starter/hello-world.html
https://codeforgeek.com/render-html-file-expressjs/
https://stackoverflow.com/questions/32257736/app-use-express-serve-multiple-html

*/

//Node modules to *require*
//if these cause errors, be sure you've installed them, ex: 'npm install express'
const path = require('path');
const express = require('express');
const app = express();


//specify that we want to run our website on 'http://localhost:8000/'
const host = 'localhost';
const port = 8000;

var publicPath = path.join(__dirname, 'public'); //get the path to use our "public" folder where we stored our html, css, images, etc
app.use(express.static(publicPath));  //tell express to use that folder



//here's where we specify what to send to users that connect to our web server...
//if there's no url extension, it will show "index.html"
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/"));
});

//depending on what url extension the user navigates to, send them the respective html file. 
/* // this example app has no additional pages besides the index, so I've commented these out for now.
app.get('/a', function (req, res) {
    res.sendFile(publicPath + '/a.html');
});
*/


//run this server by entering "node App.js" using your command line. 
app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`);
});




