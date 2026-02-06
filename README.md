# Test Driven Lab

A comprehensive testing project implementing validation utilities with full unit test coverage. Created as part of a Master's course on testing and unit tests in fullstack development.

This project demonstrates test-driven development (TDD) practices with multiple validation functions:

- Age validation (`calculateAge`, `validateAge`)
- French zip code validation (`validateZipCode`)
- Identity validation (`validateIndentity`)
- Email validation (`validateEmail`)

## Project

- Language: JavaScript
- Test runner: Jest
- Package manager: pnpm

## Installation

1. Make sure you have Node.js installed (recommended: Node 16+).
2. Install dependencies with pnpm:

```
pnpm install
```

## Running tests

Run the test suite with:

```
pnpm test
```

## Project Structure

```
├── module.js              # Core calculateAge implementation
├── validator.js           # Additional validation functions
├── module.test.js         # Tests for calculateAge
├── validator.test.js      # Tests for validators
└── custom.errors.js       # Custom error classes
```

## License

This project is for educational purposes.
