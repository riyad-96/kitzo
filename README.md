# Kitzo

Kitzo is a lightweight, production-ready React micro-utility library. This monorepo contains the core library and its documentation.

[Live Documentation](https://kitzo.vercel.app) | [Documentation Source](https://github.com/riyad-96/kitzo/tree/main/apps/docs) | [Library Source](https://github.com/riyad-96/kitzo/tree/main/packages/kitzo)

## Project Structure

- [`/packages/kitzo`](https://github.com/riyad-96/kitzo/tree/main/packages/kitzo): The core library featuring React components, hooks, and utilities.
- [`/apps/docs`](https://github.com/riyad-96/kitzo/tree/main/apps/docs): Next.js documentation site with interactive examples.

## Core Features

- **Components**: Toast system, Tooltip with smart positioning.
- **Hooks**: `useCopy`, `useDebounce`, `useDebouncedCallback`, `useLocalStorage`, `useOverlay`, `useThrottle`, `useWindowSize`.
- **Utilities**: Standalone `copy` function.

## Development Workflows

This project uses `pnpm` for monorepo management.

### Setup

```bash
pnpm install
```

### Common Commands

- `pnpm dev`: Runs the documentation site locally.
- `pnpm build`: Builds all packages and apps.
- `pnpm lint`: Lints the entire codebase.
- `pnpm type-check`: Runs TypeScript checks across the monorepo.

## License

MIT
