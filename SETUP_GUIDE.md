# ExamGhost Local Setup Guide

Welcome to the ExamGhost frontend repository. This guide will walk you through cloning and running the Next.js application locally for development.

## Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (usually installed with Node.js)
- [Git](https://git-scm.com/)

## 1. Clone the Repository

First, clone the repository to your local machine using Git:

```bash
git clone <your-repository-url>
cd examghost
```

*(Note: Replace `<your-repository-url>` with the actual Git URL of this repository).*

## 2. Install Dependencies

Install the required npm packages:

```bash
npm install
```

This project uses `framer-motion` for animations, `lucide-react` & `react-icons` for icons, and `tailwindcss` for styling.

## 3. Run the Development Server

Start the local Next.js development server:

```bash
npm run dev
```

The application will start running at [http://localhost:3000](http://localhost:3000).

## 4. Building for Production

If you need to test the production build locally:

```bash
npm run build
npm start
```

## Branch Information
You are currently viewing the `compliance-revamp` branch, which updates the marketing copy from an "undetectable exam assistant" to an "AI Study Companion/Tutor" to comply with payment gateway underwriting requirements.
