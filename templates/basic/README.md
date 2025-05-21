

## React vite template with preConfigured:


- Redux typescript hooks
- RTK Query api
- Axios
- JWT reauth
- Storybook
- Husky
- Pre-commit
- Prettier
- Eslint

## Node version 20+ required (22 - perfect)

## Scripts

- `dev`/`start` - start dev server and open browser ("vite")
- `build` - build for production ("tsc -b && vite build")
- `preview` - locally preview production build ("vite preview")
- `test` - launch test runner ("vitest --run")
- `format:check`: ("prettier --check ."),
- `format`: ("prettier --write ."),
- `prepare`: ("husky"),
- `lint:fix`: ("eslint --fix ."),
- `lint`: ("eslint ."),
- `test:coverage`: ("vitest run --coverage"),
- `test:ui`: ("vitest --ui"),
- `test:watch`: ("vitest"),
- `type-check`: ("tsc -b --noEmit")
- `storybook`: ("storybook dev -p 6006"),
- `build-storybook`: ("storybook build"),
- `build-storybook-docs`: ("storybook build --docs")

## installation

`yarn install`
or
`npm install`


## Start


`yarn start`
or
`npm start`



## Folder structure

    newApp
    ├── .husky
    │   └── pre-commit
    ├── .storybook
    │   ├── handlers.ts
    │   ├── main.ts
    │   ├── mockConst.ts
    │   └── preview.tsx
    ├── public
    │   └── mockServiceWorker.js
    ├── src
    │   ├── app
    │   │   ├── providers
    │   │   │   ├── Providers.test.tsx
    │   │   │   └── Providers.tsx
    │   │   ├── router
    │   │   │   ├── index.tsx
    │   │   │   └── Router.test.tsx
    │   │   ├── createAppSlice.ts
    │   │   ├── hooks.ts
    │   │   ├── rootApi.ts
    │   │   ├── rtkQueryConfig.ts
    │   │   └── store.ts
    │   ├── features
    │   │   ├── counter
    │   │   │   ├── Counter.module.css
    │   │   │   ├── Counter.tsx
    │   │   │   ├── CounterAPI.ts
    │   │   │   ├── counterSlice.test.ts
    │   │   │   └── counterSlice.ts
    │   │   └── quotes
    │   │       ├── Quotes.module.css
    │   │       ├── Quotes.tsx
    │   │       └── quotesApiSlice.ts
    │   ├── packages
    │   │   └── demo
    │   │       ├── assets
    │   │       │  ├── react.svg
    │   │       │  └── vite.svg
    │   │       ├── components
    │   │       │  ├── Button
    │   │       │  ├── Counter
    │   │       │  └── index.ts
    │   │       └── pages
    │   │          └── Home
    │   ├── types
    │   │   └── importMeta.d.ts
    │   ├──  utils
    │   │   └── test-utils.tsx
    │   ├── App.css
    │   ├── App.test.tsx
    │   ├── App.tsx
    │   ├── index.css
    │   ├── logo.svg
    │   ├── main.tsx
    │   ├── setupTests.ts
    │   └── vite-env.d.ts
    ├── .env.example
    ├── .gitignore
    ├── .prettierrc.json
    ├── .yarnrc.yml
    ├── codegen.ts
    ├── eslint.config.js
    ├── index.html
    ├── LICENSE
    ├── package.json
    ├── README.md
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    └── vitest.config.ts
