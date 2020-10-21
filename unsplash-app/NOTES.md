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
