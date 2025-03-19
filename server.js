var http = require('http');
var fs = require('fs');
var path = require('path');

var port = 1337;

function serveStaticFile(response, filePath, contentType, responseCode = 200) {
    fs.readFile(filePath, function (err, data) {
        if (err) {
            response.writeHead(500, { 'Content-Type': 'text/plain' });
            response.end('500 - Internal Server Error');
        } else {
            response.writeHead(responseCode, { 'Content-Type': contentType });
            response.end(data);
        }
    });
}

var server = http.createServer(function (req, res) {
    let urlPath = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch (urlPath) {
        case '':
        case '/':
            serveStaticFile(res, './public/index.html', 'text/html');
            break;
        case '/index':
            serveStaticFile(res, './public/index.html', 'text/html');
            break;
        case '/contact':
            serveStaticFile(res, './public/contact.html', 'text/html');
            break;
        case '/posts':
            serveStaticFile(res, './public/posts.html', 'text/html');
            break;
        case '/under-construction':
            serveStaticFile(res, './public/under-construction.html', 'text/html');
            break;
        case '/css/style.css':
            serveStaticFile(res, './public/css/style.css', 'text/css');
            break;
        case '/images/logo.png':
            serveStaticFile(res, './public/images/logo.png', 'image/png');
            break;
        case '/images/construction.png':
            serveStaticFile(res, './public/images/construction.png', 'image/png');
            break;
        case '/images/blogging.png':
            serveStaticFile(res, './public/images/blogging.png', 'image/png');
            break;
        case '/images/computer-typing.jpeg':
            serveStaticFile(res, './public/images/computer-typing.jpeg', 'image/jpeg');
            break;
        case '/images/merch.png':
            serveStaticFile(res, './public/images/merch.png', 'image/png');
            break;
        case '/images/x.png':
            serveStaticFile(res, './public/images/x.png', 'image/png');
            break;
        case '/images/404top_w.jpg':
            serveStaticFile(res, './public/images/404top_w.jpg', 'image/jpeg');
            break;
        case '/images/404bottom.gif':
            serveStaticFile(res, './public/images/404bottom.gif', 'image/gif');
            break;
        case '/images/404mid.gif':
            serveStaticFile(res, './public/images/404mid.gif', 'image/gif');
            break;
        default:
            serveStaticFile(res, './public/404.html', 'text/html', 404);
            break;
    }
});

server.listen(port);
console.log("Listening... Go to http://localhost:" + port);
