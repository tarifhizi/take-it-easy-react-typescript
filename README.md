# GuideLine front en react typescript app

<details>
  <summary>Click to expand!</summary>
## Summary

- Knowlage
- Apllication structure

* Split view to components
* Create components with TDD
* NGINX Implemtation with Axios
* CI/CD
  </details>

```
npx create-react-app my-app --template typescript
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
│ │ ├── name
│ │ │ ├── name.style.css
│ │ │ ├── name.view.js
│ │ │ ├── name.hook.js
│ │ │ ├── name.container.js
│ │ │ ├── name.template.js
│ │ │ ├── name.store.js
│ │ │ ├── name.injection.js
│ │ │ ├── name.type.js
│ │ │ ├── name.test.js
│ │ │ └── index.js
│ │ └── index.js
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
