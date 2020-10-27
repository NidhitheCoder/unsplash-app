# Material UI

- Material UI provides predesigned react components for easy and faster web development

- How to install ?

  1. Material UI

  ```
      // with npm
          npm install @material-ui/core

      // with yarn
          yarn add @material-ui/core

  ```

  2. Material UI svg icons

  ```
      // with npm
          npm install @material-ui/icons

      // with yarn
          yarn add @material-ui/icons

  ```

- How to use ?

  ```
  import React from 'react';
  import {Button} from  '@materila-ui/core/Button';

  function App(){
      return <Button color="primary">Hello World</Button>;
  }

  ```

# ESLint

- EsLint is a static code analysis tool for identifying problematic pattern found in ECMAScript/javascript code. It helps to maintain you code quality with ease and also helps to avoiding bugs in code.

- How to install ?

  ```
     1. Globally: npm install eslint -g
     2. On a project: npm install eslint --save-dev

  ```

- How to use ?

```
 npx eslint --init
 or
 yarn run eslint --init

```

- npx eslint --init commands quation/Answer path :

  1. How whould you like to use ESLint ? To check syntax and find problems >>
  2. What type of module does your project use ? Javascript modules (import /export) >>
  3. Which framework does your project use ? React >>
  4. Does your project use Typescript ? No >>
  5. where does your code run ? Browser >>
  6. What format do you want your config file to be in ? JSON >>
  7. Would you like to install them now with npm? Yes

  8. Remove globel,egma features,sourceType from eslintrc.json file.
  9. 'npx install-peerdeps --dev eslint-config-react-app' run this commad in teminal.
  10. Install a dev dependancy using this command : 'npm i -D eslint-config-prettier eslint-plugin-prettier prettier'.

# Prettier

- Prettier helps to formating and styling your code.

- How to install ?

  ```
  1. With yarn
      yarn add --dev --exact prettier
      yarn add --dev eslint-plugin-prettie

  2. With npm
      npm install prettier --save-dev

  ```

> > ref: https://thomlom.dev/setup-eslint-prettier-react/

# Axios with React

- Axios is a promise based HTTP request library, which allows us to interface with REST API's.

- How to install ?

  ```
     npm install axios

  ```

- Usage example

  ```

  import axios from 'axios';

  axios.get("Put your URL here")
  .then(response=>{
     // codes with response data here
  })


  * you can change the request type when you need: axios.put,axios.post,axios.delete etc..

  ```

> > referance : https://www.youtube.com/watch?v=oQnojIyTXb8
> > Axios with instance : https://www.youtube.com/watch?v=DqYqkK5YRbw

# json server

- You can easly create fake api using json server.
- How to install ?

  ```
  npm install -g json-server
  ```

- Working process

  1.  Install json-server
  2.  create db.json file with some json data
      example data :

  ```
         {

    "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
    ],
    "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
    ],
    "profile": { "name": "typicode" }
    }

  ```

  3.  Start json server using the command 'json-server --watch db.json'.
  4.  Now you can get data in this url: http://localhost:3000/posts/1

- Routes

  ```
  GET    /posts
  GET    /posts/1
  POST   /posts
  PUT    /posts/1
  PATCH  /posts/1
  DELETE /posts/1
  ```

```

>> referance for Json server Tutorial: http://zetcode.com/javascript/jsonserver/


# Redux-thunk

- This is the standerd way to define acyncronous action creators. It is basically a middleware we will be applying to our redux store.
- thunk return a function instead of an object and that gets the dispatch.

- How to install ?
```

    npm install redux-thunk

```

- If redux-thunk middleware is enabled, any time you attempt to dispatch a function instead of an object the middleware will call that function with dispatch  method itself as the first argument.
```
