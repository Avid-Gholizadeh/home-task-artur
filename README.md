# Freshcells home task

A modern React application built with TypeScript, Vite, and GraphQL. This project features a comprehensive authentication system with login functionality, internationalization support, and a component-based architecture following atomic design principles.

## 🚀 Features

- **React 19** with TypeScript for type safety
- **Vite** for fast development and building
- **GraphQL** integration with Apollo Client
- **Internationalization (i18n)** support for multiple languages
- **Atomic Design** component architecture
- **Authentication** system with login/logout functionality
- **Responsive Design** with modern UI components
- **ESLint** configuration for code quality
- **Comprehensive Testing** with Vitest and React Testing Library

## 📁 Project Structure

```
src/
├── app/                    # Main application component
├── assets/                 # Static assets (images, SVGs)
├── components/             # Reusable components
│   ├── atoms/             # Basic building blocks (Button, Input, etc.)
│   ├── molecules/         # Simple component combinations
│   ├── organisms/         # Complex component combinations
│   ├── partials/          # Layout components
│   ├── providers/         # Context providers
│   └── templates/         # Page templates
├── config/                # Configuration files
│   ├── env.ts            # Environment variables
│   ├── i18n.ts           # Internationalization setup
│   └── locales/          # Translation files
├── core/                  # Core business logic
│   ├── const/            # Constants
│   ├── graphql/          # GraphQL queries and mutations
│   ├── services/         # API services
│   └── types/            # TypeScript type definitions
├── pages/                # Page components
├── test/                 # Test utilities and setup
│   ├── setup.ts          # Test configuration
│   └── utils.tsx         # Test utilities and mocks
└── main.tsx              # Application entry point
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Set up environment variables**

   Create a `.env` file in the root directory with the following variables:

   ```env
   VITE_GRAPHQL_BASE_URI=your_graphql_endpoint_here
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:5173` to view the application.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm test` - Run tests in watch mode
- `npm run test:ui` - Run tests with UI interface
- `npm run test:run` - Run tests once
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:watch` - Run tests in watch mode

## 🧪 Testing

This project includes comprehensive unit tests using **Vitest** and **React Testing Library**. The testing setup includes:

### Test Structure

- **Component Tests** - Tests for all React components
- **Integration Tests** - Tests for component interactions
- **Unit Tests** - Tests for utility functions and hooks
- **Mock Setup** - Comprehensive mocking for external dependencies

### Test Files

- `src/components/atoms/Input.test.tsx` - Input component tests

### Running Tests

```bash
# Run all tests
npm test

# Run tests with UI
npm run test:ui

# Run tests once
npm run test:run

# Run tests with coverage
npm run test:coverage
```

## 🌐 Environment Variables

The application requires the following environment variables:

| Variable                | Description          | Required |
| ----------------------- | -------------------- | -------- |
| `VITE_GRAPHQL_BASE_URI` | GraphQL API endpoint | Yes      |

## 🏗️ Component Architecture

This project follows the **Atomic Design** methodology:

### Atoms

- `Button.tsx` - Reusable button component
- `Input.tsx` - Form input component
- `Select.tsx` - Dropdown select component
- `Option.tsx` - Select option component

### Molecules

- `InfoField.tsx` - Information display field
- `LanguageSwitcher.tsx` - Language selection component
- `TextFeild.tsx` - Text input field with validation

### Organisms

- `InfoCard.tsx` - Information card component
- `LoginForm.tsx` - Authentication form
- `Navigation.tsx` - Navigation component

### Templates

- `LoginCard.tsx` - Login page template
- `NotFoundTV.tsx` - 404 page template

## 🌍 Internationalization

The application supports multiple languages through the i18n configuration:

- **English** (`en.json`) - Default language
- **German** (`de.json`) - German translations

Language switching is handled by the `LanguageSwitcher` component.

## 🔐 Authentication

The application includes a complete authentication system:

- Login form with validation
- Authentication state management
- Protected routes
- Session persistence

## 📱 Pages

- **Login** (`/login`) - Authentication page
- **Dashboard** (`/dashboard`) - Main application dashboard
- **NotFound** (`/404`) - 404 error page

## 🛡️ Type Safety

The project is fully typed with TypeScript:

- Strict type checking enabled
- Environment variable types defined
- GraphQL query/mutation types
- Component prop interfaces

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.
