# GuideLine front en react typescript app

## Summary

## Knowlage

```
npx create-react-app my-app --template typescript
```

- Split component

```
name
  ├── name.style.css
  ├── name.view.js
  ├── name.hook.js
  ├── name.container.js
  ├── name.template.js
  ├── name.store.js
  ├── name.injection.js
  ├── name.type.js
  ├── name.test.js
  └── index.js
```

- Create components with TDD

so now we can add our coverage script to package.json

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

- NGINX Implemtation with Axios

# CI/CD

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
