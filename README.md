# Bookstore

### [A simple bookstore application](https://bookstore-ln5x2jtrpq-pd.a.run.app/)
- You can Create, Read, Update and Delete books.

## Overview

- Built with React, TypeScript, Redux, and Vite + Server Side Rendering.
- Built a Docker image, published it to Google Artifact Registry, and deployed to Google Cloud Run through GitHub Actions.
- Tested with Vitest and React Testing Library.
- Linted with ESLint and Formatted with Prettier.

## Structure

### [🐤 Ducks/Slices](https://redux.js.org/faq/code-structure#what-should-my-file-structure-look-like-how-should-i-group-my-action-creators-and-reducers-in-my-project-where-should-my-selectors-go)

- public
- src
  - **app**: app-wide setup and layout.
    - layout
    - store
  - **assets**: images, fonts, etc.
  - **common**: truly generic and reusable utilities and components.
    - components
    - test-utils
    - utils
  - **features**: contain all functionality related to a specific feature.
    - products
      - components
      - hooks
      - model
      - slices

## State Management

- Used Redux Toolkit to reduce boilerplate code and takes advantage of the [Immer library](https://redux-toolkit.js.org/usage/immer-reducers) to improve code readability.
- Used [Uncontrolled Form](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components) for form handling.
