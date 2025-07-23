# Pixelin - Modern Social Media Web Application

A feature-rich social media platform built with cutting-edge web technologies, designed to provide users with an intuitive and engaging social networking experience.

🚀 Tech Stack

**Frontend:**

- **React.js** - Component-based UI library for building interactive user interfaces
- **TypeScript** - Type-safe JavaScript for enhanced developer experience and code reliability
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **shadcn/ui** - Modern, accessible component library built on Radix UI

**Backend:**

- **Appwrite** - Open-source Backend-as-a-Service (BaaS) platform providing authentication, database, and storage solutions

✨ Features

### User Management

- **Profile Creation** - Seamless user registration and profile setup
- **Profile Updates** - Edit personal information, profile pictures, and bio
- **User Authentication** - Secure login/logout functionality

### Content Management

- **Create Posts** - Share thoughts, images, and content with the community
- **Edit Posts** - Modify existing posts with real-time updates
- **Post Interactions** - Like posts to show appreciation
- **Save Posts** - Bookmark favorite content for later viewing

### User Experience

- **Responsive Design** - Optimized for desktop and mobile devices
- **Modern UI/UX** - Clean, intuitive interface with smooth animations
- **Type Safety** - TypeScript ensures robust code quality and fewer runtime errors

🛠️ Architecture

The application follows modern web development best practices with:

- Component-based architecture using React.js
- Type-safe development with TypeScript
- Utility-first styling with Tailwind CSS
- Pre-built accessible components from shadcn/ui
- Serverless backend infrastructure with Appwrite BaaS

🎯 Purpose

Pixelin demonstrates the implementation of a full-stack social media application using modern web technologies. It serves as an excellent example of how to integrate frontend frameworks with Backend-as-a-Service solutions to create scalable, maintainable web applications.

Perfect for developers looking to understand modern React patterns, TypeScript integration, and BaaS implementation in real-world applications.

<!-- _
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
``` -->

\_
