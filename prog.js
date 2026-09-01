/* 
    1. Include the HTTP module
*/
//http module
const http = require("http");
/*
    7. Include the file system module
*/

/* 
    2. Create a server object
*/

// http.createServer((request, response) => {}) - node function that allows us to create a server that will send back data to a client
// the client is anything that tries to access our server
// request - http object that represents incoming data (data client sends)
// response - http object that represents outgoing data (data sent)

http.createServer(function (request, response) {
    // 2a. write a response to the client
    response.write("http server response!");
    response.write("http server response!");
    // 2b. end the response process
    response.end();
  }).listen(3000); //the server object listens on port 3000
/* 
    3. Handle alternate web page requests
*/

/*
    5. Handling errors
*/

/*
    6. Respond to the client in JSON
*/

/*
    8. Respond to the client in HTML
*/

/*
     9. Set up for localhost:3000/about    
*/


/*
    10. Set up for localhost:3000/anything-else
*/



/* 
    4. Allow the server to begin listening for requests
*/
