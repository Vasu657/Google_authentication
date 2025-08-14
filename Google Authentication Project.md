# Google Authentication Project

A React application demonstrating Google authentication using Firebase. This project provides a complete implementation of user authentication with Google Sign-in, protected routes, and a user dashboard.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [Firebase Configuration](#firebase-configuration)
- [Environment Setup](#environment-setup)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Google Sign-in/Sign-up**: Seamless authentication using Google OAuth
- **User Dashboard**: Protected user interface accessible only after authentication
- **Protected Routes**: Route protection ensuring only authenticated users can access certain pages
- **Responsive Design**: Built with Tailwind CSS for mobile-first responsive design
- **Modern UI Components**: Utilizes Headless UI and Heroicons for accessible and beautiful components
- **Smooth Animations**: Enhanced user experience with Framer Motion animations

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Version 14.0.0 or higher (LTS version recommended)
- **npm**: Version 6.0.0 or higher (comes with Node.js) or **Yarn**: Version 1.22.0 or higher
- **Git**: For cloning the repository
- **Google Account**: Required for Firebase setup and testing authentication
- **Firebase Project**: A configured Firebase project with Google Authentication enabled

## Installation

Follow these detailed steps to get the project running on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/Vasu657/Google_authentication.git
```

### 2. Navigate to Project Directory

```bash
cd Google_authentication
```

### 3. Install Dependencies

**Important Note**: The `node_modules` directory is intentionally excluded from this repository to keep it lightweight and avoid version conflicts. You must install all dependencies locally.

#### Using npm (recommended):

```bash
npm install
```

#### Using Yarn (alternative):

```bash
yarn install
```

This command will:
- Read the `package.json` file
- Download all required packages and their dependencies
- Create a `node_modules` directory in your project root
- Generate or update `package-lock.json` (for npm) or `yarn.lock` (for Yarn)

### 4. Verify Installation

After installation, verify that all dependencies are properly installed:

```bash
npm list --depth=0
```

This should display all the main dependencies without any errors.

## Project Structure

```
Google_authentication/
├── public/                     # Static assets
│   ├── favicon.ico            # Website favicon
│   ├── index.html             # Main HTML template
│   ├── logo192.png            # App logo (192x192)
│   ├── logo512.png            # App logo (512x512)
│   ├── manifest.json          # Web app manifest
│   └── robots.txt             # Search engine crawling rules
├── src/                       # Source code
│   ├── components/            # Reusable React components
│   │   └── Header.js          # Navigation header component
│   ├── pages/                 # Page components
│   │   ├── Dashboard.js       # User dashboard (protected)
│   │   ├── Home.js            # Landing page
│   │   └── Login.js           # Authentication page
│   ├── App.css               # Main application styles
│   ├── App.js                # Main application component
│   ├── App.test.js           # Application tests
│   ├── firebase.js           # Firebase configuration
│   ├── index.css             # Global styles
│   ├── index.js              # Application entry point
│   ├── logo.svg              # React logo
│   ├── reportWebVitals.js    # Performance monitoring
│   └── setupTests.js         # Test configuration
├── package.json              # Project dependencies and scripts
├── package-lock.json         # Dependency lock file
└── README.md                 # Project documentation
```

## Available Scripts

In the project directory, you can run the following commands:

### `npm start`

Runs the application in development mode.
- Opens [http://localhost:3000](http://localhost:3000) in your browser
- Automatically reloads when you make changes
- Displays lint errors in the console
- Enables hot module replacement for faster development

### `npm test`

Launches the test runner in interactive watch mode.
- Runs all test files
- Watches for changes and re-runs tests automatically
- Provides coverage reports
- See [running tests documentation](https://facebook.github.io/create-react-app/docs/running-tests) for more information

### `npm run build`

Builds the application for production:
- Creates an optimized build in the `build` folder
- Bundles React in production mode
- Minifies the code for best performance
- Includes hashes in filenames for caching
- Ready for deployment to any static hosting service

### `npm run eject`

**⚠️ Warning: This is a one-way operation. Once you eject, you can't go back!**

This command will:
- Remove the single build dependency from your project
- Copy all configuration files and dependencies into your project
- Give you full control over webpack, Babel, ESLint, etc.
- Make all commands except `eject` point to the copied scripts

Only use this if you need to customize the build configuration beyond what Create React App provides.

## Dependencies

This project uses the following key dependencies:

### Core React Libraries

- **react** (^19.1.1): The core React library for building user interfaces
- **react-dom** (^19.1.1): Provides DOM-specific methods for React
- **react-scripts** (^5.0.1): Scripts and configuration used by Create React App

### Routing

- **react-router-dom** (^7.8.0): Declarative routing for React applications

### Firebase Integration

- **firebase** (^12.1.0): Official Firebase JavaScript SDK for authentication and other services

### Testing Libraries

- **@testing-library/dom** (^10.4.1): Simple and complete testing utilities for DOM nodes
- **@testing-library/jest-dom** (^6.7.0): Custom Jest matchers for testing DOM state
- **@testing-library/react** (^16.3.0): Testing utilities for React components
- **@testing-library/user-event** (^14.6.1): Fire events the same way the user does

### Performance Monitoring

- **web-vitals** (^5.1.0): Library for measuring all Web Vitals metrics

### Development Dependencies (UI and Styling)

- **@headlessui/react** (^2.2.7): Completely unstyled, fully accessible UI components
- **@heroicons/react** (^2.2.0): Beautiful hand-crafted SVG icons
- **tailwindcss** (^4.1.12): Utility-first CSS framework
- **@tailwindcss/postcss** (^4.1.12): PostCSS plugin for Tailwind CSS
- **autoprefixer** (^10.4.21): PostCSS plugin to parse CSS and add vendor prefixes
- **postcss** (^8.5.6): Tool for transforming CSS with JavaScript
- **framer-motion** (^12.23.12): Production-ready motion library for React
- **react-icons** (^5.5.0): Popular icon packs as React components

## Firebase Configuration

To enable Google Authentication, you need to set up Firebase:

### 1. Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter your project name
4. Choose whether to enable Google Analytics (optional)
5. Click "Create project"

### 2. Add a Web App

1. In your Firebase project dashboard, click the web icon (`</>`)
2. Register your app with a nickname
3. Choose whether to set up Firebase Hosting (optional)
4. Click "Register app"
5. Copy the Firebase configuration object

### 3. Enable Google Authentication

1. In the Firebase Console, navigate to **Authentication** → **Sign-in method**
2. Click on **Google** in the providers list
3. Toggle the **Enable** switch
4. Add your project's authorized domains if needed
5. Click **Save**

### 4. Configure Your Application

Update the `src/firebase.js` file with your Firebase configuration:

```javascript
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "your-api-key-here",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
```

**Security Note**: In a production environment, consider using environment variables to store sensitive configuration data.

## Environment Setup

### Node.js Installation

If you don't have Node.js installed:

1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS version for your operating system
3. Run the installer and follow the setup wizard
4. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### Package Manager Choice

You can use either npm (comes with Node.js) or Yarn:

#### To install Yarn globally:
```bash
npm install -g yarn
```

#### To verify Yarn installation:
```bash
yarn --version
```

### Development Environment

For the best development experience, consider using:

- **VS Code** with React and ES6 extensions
- **Chrome DevTools** for debugging
- **React Developer Tools** browser extension

## Troubleshooting

### Common Issues and Solutions

#### 1. `npm install` fails

**Problem**: Package installation fails with permission errors.

**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Try installing again
npm install

# If on macOS/Linux and getting permission errors:
sudo npm install -g npm@latest
```

#### 2. Port 3000 already in use

**Problem**: Another application is using port 3000.

**Solution**:
```bash
# Kill the process using port 3000
npx kill-port 3000

# Or start on a different port
PORT=3001 npm start
```

#### 3. Firebase configuration errors

**Problem**: Authentication not working or Firebase errors.

**Solution**:
- Verify your Firebase configuration in `src/firebase.js`
- Ensure Google Authentication is enabled in Firebase Console
- Check that your domain is authorized in Firebase settings

#### 4. Build fails

**Problem**: `npm run build` fails with errors.

**Solution**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

#### 5. Module not found errors

**Problem**: Import errors for installed packages.

**Solution**:
```bash
# Verify the package is installed
npm list package-name

# If not installed, install it
npm install package-name

# Clear cache and restart
npm start
```

### Getting Help

If you encounter issues not covered here:

1. Check the [Create React App documentation](https://create-react-app.dev/docs/getting-started/)
2. Review [Firebase documentation](https://firebase.google.com/docs/web/setup)
3. Search for similar issues on [Stack Overflow](https://stackoverflow.com/questions/tagged/reactjs)
4. Open an issue in this repository

## Contributing

Contributions are welcome and greatly appreciated! Here's how you can contribute:

### 1. Fork the Project

Click the "Fork" button at the top right of this repository.

### 2. Clone Your Fork

```bash
git clone https://github.com/your-username/Google_authentication.git
cd Google_authentication
```

### 3. Create a Feature Branch

```bash
git checkout -b feature/amazing-feature
```

### 4. Make Your Changes

- Follow the existing code style
- Add tests for new functionality
- Update documentation as needed

### 5. Commit Your Changes

```bash
git add .
git commit -m "Add some amazing feature"
```

### 6. Push to Your Branch

```bash
git push origin feature/amazing-feature
```

### 7. Open a Pull Request

1. Go to the original repository
2. Click "New Pull Request"
3. Select your branch
4. Describe your changes
5. Submit the pull request

### Code Style Guidelines

- Use functional components with hooks
- Follow React best practices
- Use meaningful variable and function names
- Add comments for complex logic
- Ensure responsive design principles

## License

This project is open source and available under the [MIT License](LICENSE). You are free to use, modify, and distribute this code as per the license terms.

---

**Note**: This project is for educational and demonstration purposes. For production use, ensure proper security measures, error handling, and testing are implemented.

For questions or support, please open an issue in this repository.

