# NY Books

A modern React application that displays New York Times Best-Selling books. The project is built with modern architecture patterns and best practices, ensuring scalability and maintainability.

## Table of Contents

- [Architecture Overview](#architecture-overview)
  - [Test Driven Development (TDD)](#test-driven-development)
  - [Clean Architecture & DDD](#clean-architecture--ddd)
  - [Component Design](#component-design)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)
- [Building for Production](#building-for-production)
- [Contributing](#contributing)
- [License](#license)

## Architecture Overview

### Test Driven Development (TDD)

The project follows a Test-Driven Development (TDD) approach, ensuring that each feature is thoroughly tested before being implemented.

### Clean Architecture & DDD

The project follows Domain-Driven Design (DDD) and Clean Architecture principles, separating concerns into distinct layers:

- **Domain Layer** (`src/domain/`): Contains core business logic, entities, and interfaces. This layer is independent of external frameworks and libraries.
- **Data Layer** (`src/data/`): Implements use cases and interacts with external services or APIs.
- **UI Layer** (`src/pages/` and `src/components/`): Comprises React components and pages that form the user interface.

### Component Design

Components are organized following the [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/):

- **Atoms**: Basic building blocks (e.g., buttons, inputs).
- **Molecules**: Groups of atoms functioning together (e.g., form fields).
- **Organisms**: Complex components composed of molecules and atoms (e.g., headers, footers).
- **Templates**: Page-level components that place organisms in a layout.
- **Pages**: Specific instances of templates with real content.

Component Structure:

- `src/components/common/`: Reusable atomic components (atoms & molecules).
- `src/components/templates/`: Layout templates and larger component structures.

## Tech Stack

- **React 18** with **TypeScript**: For building robust and type-safe UI components.
- **TanStack Query**: Efficient data fetching and state management.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Vite**: Fast and modern build tool for development and production builds.
- **Vitest**: A blazing-fast unit test framework powered by Vite.
- **React Router**: Declarative routing for React applications.

## Getting Started

### Prerequisites

- **Node.js** >= 18
- **Yarn** package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**

   ```bash
   cd ny-books
   ```

3. **Install dependencies:**

   ```bash
   yarn install
   ```

### Configuration

The application requires an API key from The New York Times to fetch the best-selling books data.

1. **Obtain an API Key:**

   - Sign up for a developer account at [developer.nytimes.com](https://developer.nytimes.com/).
   - Navigate to **"Apps"** and create a new app to obtain your API key.

2. **Set up Environment Variables:**

   - Create a `.env` file at the root of your project:

     ```bash
     touch .env
     ```

   - Add the following variables to your `.env` file:

     ```env
     VITE_NY_TIMES_API_KEY=your_api_key_here
     VITE_NY_TIMES_BASE_URL=https://api.nytimes.com/svc/books/v3
     ```

   - Replace `your_api_key_here` with the API key you obtained.

## Running the Application

Start the development server:

```bash
yarn dev
```

- The application will be available at `http://localhost:5173` (default Vite port).

## Running Tests

Execute the test suite using Vitest:

```bash
yarn test
```

## Building for Production

To create an optimized production build:

```bash
yarn build
```

- The output will be in the `dist/` directory.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository.**
2. **Create a new feature branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit your changes:**

   ```bash
   git commit -m 'Add some feature'
   ```

4. **Push to the branch:**

   ```bash
   yarn push origin feature/your-feature-name
   ```

5. **Open a Pull Request.**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
