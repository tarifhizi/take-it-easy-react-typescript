# GuideLine front en react typescript app

## Summary

- Knowlage
- Apllication structure

* Split view to components
* Create components with TDD
* NGINX Implemtation with Axios
* CI/CD

```
npx create-react-app my-app --template typescript
```

so now we can add our coverage script to package.json

```json
"jest": {
    "collectCoverageFrom": [
      "**/*.{js,jsx}",
      "!**/node_modules/**",
      "!**/vendor/**"
    ]
  }

```

```
my-app
├── build
├── node_modules
├── public
│ ├── favicon.ico
│ ├── index.html
│ ├── manifest.json
│ └── images
│ └── ...
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
