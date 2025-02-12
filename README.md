# React + TypeScript + Vite

## App Architecture

src/
 ├── core/                  # Core infrastructure (DI, Router, Store)
 │    ├── bootstrap.ts      # Initializes plugins, DI, and store
 │    ├── di/               # Dependency Injection System
 │    │   ├── container.ts  # Tsyringe DI container
 │    │   ├── decorators.ts # Custom decorators for DI (optional)
 │    ├── router/           # Centralized Router
 │    │   ├── index.ts      # AppRouter (React Router)
 │    │   ├── routes.ts     # Route definitions
 │    │   ├── ProtectedRoute.tsx # Guard for protected routes
 │    ├── store/            # Redux Toolkit Store
 │    │   ├── index.ts      # Redux store configuration
 │    │   ├── api.ts        # RTK Query setup
 │    │   ├── slices/       # Redux slices
 │    │   │   ├── authSlice.ts
 │    │   │   ├── userSlice.ts
 ├── plugins/               # Feature Plugins (Lazy Loaded)
 │    ├── relations/
 │    │   ├── services/     # Local services for this plugin
 │    │   ├── store/        # Local Redux store for this plugin
 │    │   ├── components/   # UI components
 │    │   ├── api.ts        # API endpoints for this module
 │    │   ├── index.ts      # Plugin entry point
 │    ├── finance/
 │    ├── health/
 ├── modules/               # Auth, Registration, etc.
 │    ├── auth/             # Authentication module
 │    ├── registration/     # Registration module
 ├── lib/                   # Shared utilities and components
 │    ├── hooks/            # Reusable hooks
 │    ├── utils/            # Helper functions
 │    ├── components/       # Shared UI components
 ├── App.tsx                # Renders the main app
 ├── main.tsx               # Entry point (loads DI & Router)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
