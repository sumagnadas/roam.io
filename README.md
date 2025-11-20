# 🧭 Roam.io

> **Explore. Navigate. Roam.**
> A modern web application for navigation and discovery, built for performance and scalability.

## About

**Roam.io** is a web-based platform designed to help users navigate and explore their surroundings. Utilizing a modern tech stack, it features a reactive interface for seamless mapping and data visualization.

## Tech Stack

* **Framework:** React.js
* **Build Tool:** Vite
* **Styling:** TailwindCSS
* **Containerization:** Docker
* **Backend:** Django + DRF

## 📂 Project Structure

The project is organized as follows:

```bash
roam.io/
├── frontend/              # Client-side Application
│   ├── public/            # Static assets
│   ├── src/               # React source code
│   ├── Dockerfile         # Frontend container config
│   └── vite.config.js     # Vite settings
├── server/                # Server-side Application
│   ├── rmio_bkd/          # Main Django Project config
│   ├── serpapi_results/   # API Result caching
│   ├── badges.json        # Static data resources
│   ├── events.json
│   ├── guides.json
│   ├── manage.py          # Django CLI entry point
│   ├── requirements.txt   # Python dependencies
│   └── Dockerfile         # Backend container config
└── README.md              # Project Documentation
```

## Getting Started

To get a local copy of this project up and running for development, you can use the traditional method for each part or the containerized Docker method.

---

### Method 1: Running with Docker (Recommended for Full Stack)
#### Prerequisites
* Docker and Docker Compose


This method uses the provided `docker-compose.yml` to spin up both the frontend and backend services simultaneously.

1.  Ensure Docker Desktop or Docker Engine is running on your machine.
2.  In the root directory of the project, run:
    ```bash
    docker compose up --build
    ```
3.  Once the build is complete, the application services will be running (check the `docker-compose.yml` for exact ports).
4.  The application will be available at `http://localhost:5173`

---

### Method 2: Manual setup (Quick Start)
#### Prerequisites

* Node.js (LTS version recommended)
* npm or yarn
* Python 3.x and pip (for the backend)

This is the fastest way to view the client application in development mode.

1.  Navigate into the frontend directory:
    ```bash
    cd frontend
    ```
2.  Install NPM packages:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
4.  Navigate into the backend directory:
    ```bash
    cd server/
    ```
5.  Install NPM packages:
    ```bash
    pip install -r requirements.txt
    ```
6.  Migrate and populate the database
    ```bash
    python manage.py migrate
    python manage.py update_db
    ```
7.  Start the development server:
    ```bash
    python manage.py runserver
    ```
8.  Open your browser and navigate to the address shown in your console (usually `http://localhost:5173`).

---