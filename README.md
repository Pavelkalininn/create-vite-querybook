## Open-Source Project: React + Vite App Generator (RTK, RTK Query, Axios, JWT reauth, Storybook, TypeScript, ESLint, Prettier)


🚀 A CLI tool for React + Vite apps with preconfigured RTK, RTK Query, Axios, JWT reauth, Storybook, TypeScript, ESLint, Prettier, Testing Library, and more.

🔧 Goal: Save developers' time by providing ready-to-use templates instead of manual setup.



## Quick Start

With yarn:

```sh
npx create-vite-querybook newApp
cd newApp
yarn install
yarn start
```


With npm:

```sh
npx create-vite-querybook newApp
cd newApp
npm install
npm start
```

### Or by create functions:

```
    yarn create vite-querybook newApp
    cd newApp
    yarn install
    yarn start
```

 or 

```
    npm init vite-querybook newApp
    
    cd newApp
    npm install
    npm start
```



## Requirements:

Node 20+ (22 - perfect)

## Folder structure (default template)

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



### You can contribute at https://github.com/Pavelkalininn/create-vite-querybook
Why Contribute?

    ✅ Beginner-friendly — First PR? No problem!
    ✅ Modular architecture — Easy to understand and extend.
    ✅ Active maintenance — Regular updates.

How to Help?
👨‍💻 For Developers
Add new templates (Next.js, SSR, PWA, etc.)

Improve CLI (interactive setup, plugins)

Optimize build (speed, bundle size)

For Designers:
Design a logo & icons for CLI/docs.
Create templates (landing, 404).

Write tests (Vitest)

📖 For Writers
Improve docs (translations, guides)

Write tutorials (usage, customization)

🔍 For Testers
Test cross-platform support

Report bugs

Getting Started
Pick an issue from Good First Issues or suggest an idea.

Fork & make changes.

Submit a PR with a clear description.

Code Standards
ESLint + Prettier

Conventional Commits (feat:, fix:, docs:)

Tests for new features

Tech Stack
Node.js (CLI)

Vite + React (base template)

TypeScript (optional)
Redux toolkit
RTK Query


Vitest (testing)


We believe open-source thrives on kindness, clarity, and collaboration. Join us! 🎉