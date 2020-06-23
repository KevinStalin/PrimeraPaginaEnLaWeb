const http = require('http');

//reques lo que vien del cliente
//response lo que respondo del servidor

http.createServer((req, res) => {
    //res.write('Hola mundo desde la web');
    res.writeHead(200, { 'Content-Type': 'application/json' }) //enviaremos una respuesta json
    let content = {
            nombre: 'Kevin',
            edad: 22,
            url: req.url
        }
        // envia un json al cliente
    res.write(JSON.stringify(content));
    res.end();
}).listen(8000);
console.log('Escuchando el puerto 8000');