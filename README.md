# Boilerplate C#, React and Typescript Powered by Turborepo

This monorepo combines **C# (.NET 8 and ASP.NET)** for backend development and **Vite with React and TypeScript** for frontend development. It leverages **Turborepo** for efficient task scheduling and dependency management. 

Additionally, it includes custom scripts to synchronize package dependencies, ensuring a seamless development experience.

---

## Table of Contents
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Scripts and Automation](#scripts-and-automation)
- [Usage](#usage)

---

## Tech Stack

### Backend:
- **.NET 8** (C#) with ASP.NET
- **NuGet** for package management

### Frontend:
- **React** with TypeScript
- **Vite** for fast builds and live reload
- **npm** for dependency management

### Build Tool:
- **Turborepo** for monorepo orchestration

---

## Getting Started

### Prerequisites:
- Node.js and npm (v18+)
- .NET 8 SDK
- (Optional) Docker

---

### Installation

Run the following command to set up the monorepo:
```bash
npm install
```
- Installs all `npm` dependencies for the frontend.
- Automatically installs **NuGet packages** for the backend.
- Runs shell scripts to generate `package-lock.json` files for all sub-packages.

---

## Project Structure

```
/monorepo
├── /apps
│   ├── /server        # C# ASP.NET backend
│   └── /client           # React frontend
├── /scripts           # Shell scripts for monorepo management
├── turbo.json         # Turborepo configuration
├── package.json       # Root package manager file
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

### Key Shell Scripts:
1. **`/scripts/update-package-lock.sh`**:
    - Generates or updates `package-lock.json` files for all sub-packages.

2. **`/scripts/sync-nuget.sh`**:
    - Ensures all required NuGet packages are installed.

3. **`/scripts/monorepo-setup.sh`**:
    - Combines the setup process for both `npm` and `NuGet`.

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

3. **Build for Production**:
   ```bash
   turbo run build
   ```

4. **Update Dependencies**:
    - For `npm`:
      ```bash
      npm install
      ```
    - For NuGet:
      ```bash
      sh ./scripts/sync-nuget.sh
      ```

---

### Notes
- The backend and frontend are configured to work seamlessly with Turborepo, enabling optimized builds and deployments.
- Scripts handle monorepo-specific nuances, such as generating `package-lock.json` files for sub-packages and syncing NuGet dependencies.

---

Happy Coding! 🚀
```