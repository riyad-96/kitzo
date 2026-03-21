# Kitzo Project

Kitzo is a lightweight production-ready React micro-utility library designed for modern web applications. It provides a foundational set of components, hooks, and utility functions that focus on simplicity, performance, and minimal overhead.

## Project Structure

The repository is organized to contain the core library and its documentation.

- [kitzo-docs](file:///home/riyad/Desktop/kitzo-monorepo/apps/docs/README.md): A Next.js application providing comprehensive documentation, live examples, and usage guidelines.
- [kitzo](file:///home/riyad/Desktop/kitzo-monorepo/packages/kitzo/README.md): The core library containing React components, custom hooks, and utility functions.

## Core Features

### React Components

The library includes essential UI components built with accessibility and performance in mind:

- **Toast**: A flexible notification system supporting various positions, animations, and interaction patterns.
- **Tooltip**: A lightweight contextual information component with smart positioning and customizable delay/animations.

### React Hooks

A collection of hooks for common application logic:

- **useDebounce**: Delays the update of a value until a specified time has passed.
- **useDebouncedCallback**: Returns a debounced version of a callback function.
- **useThrottle**: Limits the execution rate of a frequently changing value.
- **useLocalStorage**: Synchronizes state with browser local storage.
- **useWindowSize**: Tracks the current dimensions of the browser window.
- **useCopy**: Simplifies clipboard operations within React components.

### Utility Functions

- **copy**: A standalone function for programmatically interacting with the system clipboard.

## Technology Stack

The project utilizes a modern development stack:

- **React 19**: Leverages the latest React features and improvements.
- **Tailwind CSS v4**: Uses the latest iteration of Tailwind for styling with CSS-based configuration.
- **TypeScript**: Ensures type safety across the entire codebase.
- **Vite**: Used as the build tool and development server for the core library.
- **Next.js**: Powers the documentation site for optimal performance and SEO.

## Development

### Installation

Install dependencies from the root directory:

```bash
pnpm install
```

### Commands

- **pnpm dev**: Starts the documentation site in development mode.
- **pnpm build**: Builds both the core library and the documentation site.
- **pnpm lint**: Runs linting across all packages.
- **pnpm type-check**: Performs type checking across the project.

## License

This project is licensed under the MIT License.
