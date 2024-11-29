# Boilerplate C#, React and Typescript Powered by Turborepo

First of a kind Monorepo that supports both JavaScript and C#.

This monorepo combines **C# (.NET 8 and ASP.NET)** for backend development and **Vite with React and TypeScript** for frontend development. It leverages **Turborepo** for efficient task scheduling and dependency management.

Additionally, it includes custom scripts to synchronize package dependencies, ensuring a seamless development experience.

---

## Table of Contents

- [Boilerplate C#, React and Typescript Powered by Turborepo](#boilerplate-c-react-and-typescript-powered-by-turborepo)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [Method 1: Manual Setup](#method-1-manual-setup)
    - [Method 2: Using Degit](#method-2-using-degit)
- [Basic Usage](#basic-usage)
- [Project Structure](#project-structure)
- [Scripts and Automation](#scripts-and-automation)
  - [Key Shell Scripts](#key-shell-scripts)
- [Usage](#usage)
  - [Development Workflow](#development-workflow)
- [Notes](#notes)

---

## Tech Stack

### Backend

- **.NET 8**
- **ASP.NET**

### Frontend

- **React** with TypeScript
- **Vite** for fast builds and live reload
- **npm** for dependency management

### Build Tool

- **Turborepo** for monorepo orchestration

---

## Getting Started

### Prerequisites

- Node.js and npm (v18+)
- .NET 8 SDK
- (Optional) Docker

---

### Installation

#### Method 1: Manual Setup

1. **Clone the Boilerplate Repository**

	Clone the boilerplate repository to your local machine:

	```bash
	npm install
	git clone <boilerplate-repo-url>
	cd <boilerplate-repo-directory>
	```

2. **Remove the Boilerplate's Git History**
   Reset the repository to disconnect it from the original boilerplate history:

   ```bash
   rm -rf .git
   ```

3. **Initialize a New Git Repository**
   Reinitialize Git to start fresh:

   ```bash
   git init
   ```

4. **Add Your Repository as the Remote**
   Link the repository to your remote Git repository:

   ```bash
   git remote add origin <your-repo-url>
   ```

5. **Commit the Boilerplate Code**
   Stage and commit the boilerplate code to your new repository:

   ```bash
   git add .
   git commit -m "Initial commit with boilerplate"
   ```

6. **Push to Your Repository**
   Push the changes to your remote repository:

   ```bash
   git push -u origin main
   ```

---

#### Method 2: Using Degit

1. **Install Degit**
   Ensure you have degit installed globally on your system:

   ```bash
   npm install -g degit
   ```

2. **Clone the Boilerplate Repository Without Git History**
   Use degit to clone the boilerplate repository:

   ```bash
   degit <boilerplate-repo-url> <target-directory>
   cd <target-directory>
   ```

3. **Initialize Your Git Repository**
   Start a new Git repository in the cloned directory:

   ```bash
   git init
   ```

4. **Add Your Repository as the Remote**
   Connect your repository as the remote:

   ```bash
   git remote add origin <your-repo-url>
   ```

5. **Commit and Push**
   Commit the code and push it to your repository:

   ```bash
   git add .
   git commit -m "Initial commit with boilerplate"
   git push -u origin main
   ```

Choose the method that best fits your workflow.

### Basic Usage

Run the following command to set up the monorepo:

```bash
npm install
```

- Installs all `npm` dependencies for the frontend.
- Automatically installs **NuGet packages** for the backend.
- Runs shell scripts to generate `package-lock.json` files for all sub-packages except C# packages.

---

## Project Structure

```
/monorepo
├── /apps
│   ├── /server        # C# ASP.NET backend
│   └── /client           # React frontend
├── /scripts           # scripts for monorepo management
├── turbo.json         # Turborepo configuration
├── package.json       # Root package
├── nuget.config       # NuGet configuration
└── README.md          # Documentation
```

- **`/apps/server`**:
  - Contains the ASP.NET backend project.
  - Manages dependencies via `nuget.config`.

- **`/apps/client`**:
  - Contains the React frontend built with Vite.
  - Manages dependencies via `package.json`.

---

## Scripts and Automation

### Key Shell Scripts

1. **`/scripts/update-nested-package-lock.sh`**:
    - Generates or updates `package-lock.json` files for all sub-packages.

2. **`/scripts/install-nuget-dependencies.sh`**:
    - Ensures all required `NuGet` packages are installed.

3. **`/scripts/prepare.sh`**:
    - Adds commands to be activated on `prepare`.

---

## Usage

### Development Workflow

1. **Install Dependencies**:

   ```bash
   npm install
   ```

   This ensures that both `npm` and NuGet packages are installed and synchronized.

2. **Start Development Servers**:
    - **Backend**:

      ```bash
      turbo run dev --scope=server
      ```

    - **Frontend**:

      ```bash
      turbo run dev --scope=web
      ```

    - **All**:

      ```bash
      npm run dev
         ```

---

### Notes

- The backend and frontend are configured to work seamlessly with Turborepo, enabling optimized builds and deployments.
- Scripts handle monorepo-specific nuances, such as generating `package-lock.json` files for sub-packages and syncing NuGet dependencies.
