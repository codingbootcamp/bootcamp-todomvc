# bootcamp-todomvc
This is the backend for the bootcamp todomvc project. 

#### How to run it?
Simply clone the repo; `cd` into it; `npm install`; `npm start`

#### Architecture
It is a simple [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) app built over node.

The stack is: `expressjs` + `mongodb` (with `mongoose` ODM)
Design is simple:

There is a `TodoService` which interacts with the underlying database.

There is a `TodoController` which handles the route. It is passed on the `request` & `response` objects.

There is a `server.js` file, which stitches everything together:
1. Expose an endpoint like `/todos` and listen on it.
2. When a request comes in, intercept it and pass it to the `TodoController`.
3. `TodoController` does necessary massaging if necessary and passes it on to `TodoService`.
4. `TodoService` runs the query and returns the result.
5. `TodoController` accepts the result and returns it as `json` to the client making the call.

#### Available endpoints
1. **GET** `/todos` - returns list of all available todos
2. **POST** `/todos` - creates a new todo
3. **GET** `/todos/:todoId` - fetches a single todo
4. **PATCH** `/todos/:todoId` - updates a todo
5. **DELETE** `/todos/:todoId` - deletes a todo
