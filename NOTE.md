usename: jsaugat_
password: jsaugat_

##### `express.json()` 
- is middleware provided by the Express framework that parses incoming requests with JSON payloads. When a client sends a POST or PUT request with a JSON payload, this middleware parses the JSON data and makes it available in the request.body property. It essentially allows the server to handle JSON-formatted data in the request body.

## Data Flow - Request/Response:

1. **Client (React App):** 
 - Initiates an HTTP request (e.g., using fetch or Axios) to the backend API endpoint.
2. **Backend (Express):** 
- Receives the HTTP request, processes it through the appropriate route and controller, interacts with the database (if needed), and sends back an HTTP response.
3. **Client (React App):** 
- Receives the HTTP response, processes the data, and updates the UI as necessary.


## User Authentication
### Login
- take email and password from request.body
- if email exists, compare the password. if matches, create a token and send as response.





fuck dfdfdfdddfdfdfdfdfdfdfddddddddffdf