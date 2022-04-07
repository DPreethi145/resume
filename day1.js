const http = require("http"); 
// single API
http.createServer((request, response)=>{ //creating server
    
    // response.write('first node program');
    // response.write('<h1>first node program</h1>');
    let user = {name:'preethi'};
    response.write(JSON.stringify(user));
    response.end(); // closing the server

}).listen(3000)


