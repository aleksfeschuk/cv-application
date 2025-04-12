# CV Application

## Overview

The **CV Application** is a React-based web application designed to help users create, edit, and download a resume in PDF format. The app allows users to input their general information, educational background, and experience, with the ability to edit entries in real-time. It also includes a feature to load a sample resume for quick setup and a clear resume option to start fresh. The application is deployed on Vercel for easy access and sharing.

This project was built as a practice exercise to enhance my skills in front-end development, state management, and deployment workflows.

## Features

- **Dynamic Resume Creation:** Add, edit, and delete sections for general information, education, and experience.
- **Real-Time Editing:** Changes are reflected instantly in the resume preview.
- **Sample Resume Loading:** Load a pre-filled sample resume (Canadian IT context, 2025) to get started quickly.
- **PDF Export:** Download the resume as a professionally formatted PDF using `jspdf`.
- **Clear Resume Option:** Reset the resume to start from scratch.
- **Responsive Design:** The app is styled to be user-friendly on both desktop and mobile devices.
- **Deployment on Vercel:** The app is hosted on Vercel with a custom configuration for Single Page Applications (SPA).

## Tech Stack

The following tools and technologies were used to build this project:

- **React:** A JavaScript library for building user interfaces, used for creating reusable components and managing state.
- **Vite:** A modern front-end build tool for fast development and optimized production builds.
- **Sass (SCSS):** A CSS preprocessor for writing modular and maintainable styles.
- **jsPDF:** A library for generating PDF files directly in the browser.
- **Git & GitHub:** Version control system for tracking changes and collaborating on the project.
- **Vercel:** A platform for deploying and hosting the application with automatic scaling and domain management.
- **Node.js & npm:** For managing dependencies and running the development server.

## What I Learned

During the development of this project, I gained the following skills and knowledge:

- **React Component Architecture:** I learned how to create reusable components (e.g., `GeneralInfo`, `Education`, `Experience`, `CVDisplay`) and manage state using React hooks (`useState`, `useEffect`).
- **State Management:** I practiced managing complex state in React, including handling temporary states for editing and updating multiple sections of the resume.
- **Dynamic Form Handling:** I implemented forms that allow users to add, edit, and delete entries dynamically, with real-time updates to the UI.
- **PDF Generation:** I learned how to use the `jsPDF` library to generate a professional-looking PDF file, including proper text alignment and spacing.
- **Styling with SCSS:** I improved my CSS skills by using SCSS for modular styling, including nested styles, variables, and responsive design.
- **Deployment with Vercel:** I gained experience deploying a React application on Vercel, including resolving common issues like 404 errors for SPAs by configuring `vercel.json`.
- **Version Control:** I practiced using Git for version control, including committing changes, pushing to GitHub, and managing a remote repository.
- **Debugging and Problem-Solving:** I encountered and resolved various issues, such as overlapping text in PDFs, deployment errors, and token authentication issues with Vercel CLI.
- **Responsive Design:** I learned how to make the application responsive using CSS media queries, ensuring a good user experience on both desktop and mobile devices.

## Installation and Setup

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/cv-application.git
   cd cv-application