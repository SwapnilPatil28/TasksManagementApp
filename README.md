# Daily Planner

This is my first React project.

I built this app to practice the basics of frontend development and understand how a real project is structured using React and Vite.

## Live Project Link

Vercel URL: [Add your deployed link here]

## What I Built

- A Daily Planner interface to manage personal tasks
- Add task and delete task features
- Mark task as done feature
- Priority-based task sorting (High, Medium, Low)
- Light mode and dark mode toggle
- Data persistence using localStorage

## How I Built This Project

### 1) Project Setup

- Created the app using React with Vite
- Organized files into components and root app structure
- Configured basic linting for cleaner code

### 2) Core Task Features

- Managed app data using React state
- Added task creation with name and priority
- Implemented task deletion and completion toggling
- Added automatic sorting by priority value

### 3) Data Persistence

- Stored tasks in localStorage so refresh does not lose data
- Stored theme mode in localStorage
- Stored incremental task ID in localStorage

### 4) UI and Styling

- Designed a clean planner layout with a top navigation, task list, and workspace panel
- Built responsive behavior for smaller screens
- Converted all component styling to Tailwind classes inside the component file
- Kept the same visual style while removing the external component CSS file

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript (JSX)
- localStorage API

## What I Learned

- How to break UI into reusable React components
- How to use state and effects for interactive behavior
- How to persist user data in the browser
- How to migrate styles from plain CSS to Tailwind utility classes
- How to prepare a project for production build

## Run Locally

1. Install dependencies:

	npm install

2. Start development server:

	npm run dev

3. Create production build:

	npm run build

4. Preview production build:

	npm run preview
