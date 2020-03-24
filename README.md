# GuideLine front en react typescript app

- Knowlage
- Get Started
- Create a ReactJS Component.
- Style a component using bootstrap.
  - bootstrap integration
  - custom styles
- Create a Store using Easy Peasy
- Fetch data from API
- Audit Performances

## Knowlage

JavaScript
ReactJs
TypeScript
BootStrap

## Get Started

```
npx create-react-app my-app --template typescript
```

For Coverage Tests

```json
{
  "scripts": {
    "test:coverage": "react-scripts test --coverage"
  },
  "jest": {
    "collectCoverageFrom": [
      "**/*.{js,jsx}",
      "!**/node_modules/**",
      "!**/vendor/**"
    ]
  }
}
```

## How to split UI to components

## Create a ReactJS Component.

there is two way today to create a react component, by using a Class or a Function.
in this gudeline we will use Functions

### split your code

to create a component, we need to handle datas, views, actions, enents , typescript definitions, styles, tests ... this is why it will be a good idea to split our code to different files. and then we add an index witch will export for us the final component.

#### exemple of component structure

```
name
  ├── name.style.css
  ├── name.component.js
  ├── name.hook.js
  ├── name.container.js
  ├── name.template.js
  ├── name.store.js
  ├── name.injection.js
  ├── name.type.js
  ├── name.test.js
  └── index.js
```

- you are free to use other names like view instead of component , interface in place of type. the important is to use a name that match with the content.
- you can use capital letters to name the files,(Name in place of name) but remember that Capital letters we most use theme only to name Classes and instances of react components not the file,

### Steps to create a component (TDD)

- guive a name to your component: should be clear and unique in the application, in order to make them being easier to find and to avoid possible confusions. To name the components, follow the pattern path-based-component-naming, accordingly to its relative path. For exemple, a component that is located at: components/users/list.container.tsx would be named as UsersListContainer.

this will:

-- Facilitate the search for the file inside the project
-- Avoid repeating names on the imports

- we will create our test file under ./src/components/name/name.test.tsx. the test file is very important, it will guide our code.

- Apllication structure

```
my-app
├── build
├── node_modules
├── public
│ ├── favicon.ico
│ ├── index.html
│ ├── manifest.json
│ └── images
│   └── ...
├── src
│ ├── components
│ │ └── ...
│ ├── pages
│ │ └── ...
│ ├── utils
│ │ ├── ...
│ │ └── index.js
│ ├── index.css
│ ├── index.js
│ ├── react-app-env.d.ts
│ ├── serviceWorker.js
│ └── setupTests.ts
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```
