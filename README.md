# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `Modelo de peticiones al postman`

#### `POST USER`

##### `Regiter:`

ROUTE: http://localhost:4000/singup

request:

{
    "email": "test@test.com",
    "password": "123456",
    "passwordConfirmation": "123456"
}

response:

{
    "token": "token generated (copy)"
}

##### `Login:`

ROUTE: http://localhost:4000/auth/local/login

request:

{
    "email": "test@test.com",
    "password": "123456",
}

response:

{
    "token": "token generated (copy)"
}

##### `Creates a new list of favorites:`

ROUTE: http://localhost:4000/api/favs

request:

Header: Authorization
Value: token generated (copied)

body:

{
    "nameList": "MejoresRockandRoleTest",
    "fav": [{
        "title": "La gallina turulecaZAAZ",
        "description": "Cancion infantil",
        "link": "URL testFFF"
    },
    {
        "title": "La gallina turulecaZAAZ",
        "description": "Cancion infantil",
        "link": "URL testFFF"
    }]
}

response:

{
    "favLists": {
        "nameList": "MejoresRockandRoleTest55",
        "user": "626c9779a6e74d8fe7476052",
        "fav": [
            "626c99aaa6e74d8fe747605a",
            "626c99aaa6e74d8fe747605b"
        ],
        "_id": "626c99aaa6e74d8fe747605e",
        "__v": 0
    }
}

##### `Get all list of favorites:`

ROUTE: http://localhost:4000/api/favs

request:

Header: Authorization
Value: token generated (copied)

response:

{
    ALL LIST OF FAVORITE LISTS
}

##### `Get a single list of favorites:`

ROUTE: http://localhost:4000/api/favs/:id

request:

Header: Authorization
Value: token generated (copied)

response:

{
    FAVORITE LISTS OF USER
}

##### `Deletes a list of favorites:`

ROUTE: http://localhost:4000/api/favs/:id

request:

Header: Authorization
Value: token generated (copied)

response:

{
    "message": "deleted"
}


### `npm test`

Los tests están en la carpeta __tests__ para el usuario y la lista de favoritos

