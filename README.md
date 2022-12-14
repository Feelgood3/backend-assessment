The objective of this mission is to put into practice what you have learned in the program. The topics that will be covered are: Node.js, express, mongodb, testing.

The mission consists of two parts: first you will have to build a RestFul api and then you will have to answer a series of questions. In the mission report you must add the link to the project repository and the answers to the questions.

The deadline for delivery will be Friday, September 09.

1. Challenge
FAVS API with JS
Favs is a new company that aims to provide a better way to organize your favorite things: music, clothes, courses, etc., all in one place.

Current Status
The CEO of Favs hired you to develop the initial version of his product. It’s worth mentioning that she does not have any technical background.

However, she has a clear vision on how the product should behave, so she provided a list of functional requirements.

Requirements
Each user will have a unique id, and he will authenticate using a non-empty email and a password.
Each user will be able to save a list of favs. Each fav will have an title , description and link, and each list will be defined by a unique id and a name.
The system have to allow the following actions
Create a new list with a given name (auto-generate the unique id)
Get the users lists
Get an individual list for the user
Add items to a given list (based on the generated id)
All endpoints have to be secured with Bearer Auth (JWT) Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6IkNBTUlMTyB6dWx1YWdhIiwicm9sZSI6InZpZXdlciIsImVtYWlsIjoiaysxQGxvLmNvbSIsImlhdCI6MTY0ODg0Mzc2NCwiZXhwIjoxNjQ4ODUwOTY0fQ.SG40QSQ7IZgvDT98Vr7KMYb2Oxfpy_mfeSHRv3fXZcY
You should ensure that the password is strong enough
What are we looking for?
A well-designed solution and architecture Avoid duplication, extract re-usable code where makes sense. We want to see that you can create an easy-to-maintain codebase.
Storage We need a MongoDB database implementation.
Testing Try to create tests covering the main functionalities of your code. Feel free to create both unit tests and functional tests.
Documentation The CEO has a non-tech background so try to explain your decisions, as well as any other technical requirement (how to run the API, external dependencies, etc ...)
How to submit your solution
Push your code to the develop branch - we encourage you to commit regularly to show your thinking process was.
Create a new Pull Request to main branch & merge it.
Once merged you won't be able to change or add anything to your solution, so double-check that everything is as you expected!

Route	HTTP Verb	Route Middleware	Description
/api/favs	GET	isAuthenticated()	Get all list of favorites
/api/favs	POST	isAuthenticated()	Creates a new list of favorites
/api/favs/:id	GET	isAuthenticated()	Get a single list of favorites
/api/favs/:id	DELETE	isAuthenticated()	Deletes a list of favorites
/auth/local/login	POST		Login user by email/password
Usage
The use of endpoints is very simple, previously you could see a table of endpoints that you can call, if you need to create a user or log in, here we have some examples.

Authentication user /auth/local/login:
Request Body:
json
{
"email": "kz@mz.com",
"password": "12345"
}

Response:
json
{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFjNjM1MTljZjlkNTQ5YjA3YWU2NTEiLCJpYXQiOjE2MjE5MTMyNjIsImV4cCI6MTYyMTk5OTY2Mn0.WkptwtzkfxNu5sQ28idbt4bJ7RDbXvVNlZXF0Z0ht-0"
}

2. Questions
Indicate which are the parts of the following url: https://backend.mega-app.com.co:8080/api/articles/search?docid=1020&hl=en#dayone

https = Scheme (This is the protocol to be used. ie. for HTTP it will be either http or https)
backend.mega-app.com.co =  (This is either the IP or the name of the server that will be accessed)
8080 = Port (Port in which the HTTP server is being listened)
api/articles/search = Path (This is the route to the resource that will be accessed)
docid=1020&hl=en = Query strings (This contains additional information for the server as properties attribute=value, and we can find two properties, as they are separated with '&')
#day1 = Fragment (Internal location inside a document)

Define what is a Web API, Restful and what are the statusCode 200-, 400-, 500-

Web API: set of definitions and protocols to build and API. It is meant to be built to work using internet. Even though a web API can be REST, it may use other technologies instead, and does not rely exclusively on JSON responses, as it can receive XML as well. 

Rest API: It's an API that must adjust to the REST architecture, which stands for representational state transfer, an approach to communications between web services. When a client makes a request to a Restful, it has to be made using the HTTP protocol. (GET, POST, PUT, DELETE).

When we talk about CRUD, what does it mean?

CRUD stands for Create, Read, Update, and Delete. These are the standard database commands for REST. It may be considered a cycle instead of a system, as most applications may require using all of the commands within it.
