username: jsaugat_
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


## RTK Slices
### authSlice
- deals with LocalStorage stuffs: 
  - take user data from api and store them in localStorage and auth-state and remove from LocalStorage on  logout
  - deals with user id, name, email
  - does not deal with token (i.e. stored in http cookie)
### userApiSlice
- deals in making requests to backend api to authenticate or login, register, get profile, update profile