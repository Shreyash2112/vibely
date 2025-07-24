# Vibely - Modern Social Media Web Application

A feature-rich social media platform built with cutting-edge web technologies, designed to provide users with an intuitive and engaging social networking experience.

## 🚀 Tech Stack

**Frontend:**

- **React.js** – Component-based UI library for building interactive user interfaces
- **TypeScript** – Type-safe JavaScript for enhanced code reliability
- **Tailwind CSS** – Utility-first CSS framework for rapid UI development
- **shadcn/ui** – Modern, accessible component library built on Radix UI
- **TanStack Query** – Powerful data fetching and caching library for React
- **Zod** – TypeScript-first schema validation and parsing library

**Backend:**

- **Appwrite** – Open-source Backend-as-a-Service platform providing authentication, database, and storage solutions

## 📦 Installation & Setup (Vite)

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager) or [yarn](https://yarnpkg.com/)

### Clone the Repository

```bash
git clone https://github.com/Shreyash2112/vibely.git
cd vibely
```

### Install Dependencies

Using npm:

```bash
npm install
```

Using yarn:

```bash
yarn
```

### Environment Configuration

1. Copy the e`env.example` & `.env` file in the root of your project:

```bash
cp .env.samples .env
```

2. Update `.env` with your Appwrite credentials. Replace the placeholder values with your actual Appwrite credentials.:

```env
VITE_APPWRITE_API_ENDPOINT = ";
VITE_APPWRITE_PROJECT_ID = ";
VITE_APPWRITE_BUCKET_ID = ";
VITE_APPWRITE_DATABASE_ID = ";
VITE_APPWRITE_SAVES_COLLECTION_ID = ";
VITE_APPWRITE_USERS_COLLECTION_ID = ";
VITE_APPWRITE_POSTS_COLLECTION_ID = ";

# For development pusrpose only
VITE_APPWRITE_DEV_KEY = ""

```

## 🚀 Getting Started

### Running the Development Server

```bash
npm run dev
```

or

```bash
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Initial Setup

1. **Sign Up** – Register a new account and complete your profile.
2. **Create Your First Post** – Share text or images.
3. **Interact** – Like and save posts from other users.
4. **Edit Profile** – Update bio, profile picture, and personal info.

### Production Build

```bash
npm run build
```

```bash
npm run preview
```

## ✨ Features

### User Management

- **Profile Creation** – Seamless registration and setup
- **Profile Updates** – Edit personal details and avatar
- **Authentication** – Secure login/logout

### Content Management

- **Create Posts** – Share thoughts and media
- **Edit Posts** – Real-time post modifications
- **Post Interactions** – Like posts to show appreciation
- **Save Posts** – Bookmark favorite content

### User Experience

- **Responsive Design** – Desktop & mobile optimized
- **Modern UI/UX** – Clean interface with smooth animations
- **Type Safety** – Robust code quality with TypeScript

## 🛠️ Architecture

- Component-based design with React.js
- Type-safe development using TypeScript
- Utility-first styling via Tailwind CSS
- Accessible components from shadcn/ui
- Data fetching & caching with TanStack Query
- Schema validation with Zod
- Serverless backend powered by Appwrite BaaS

## 🎯 Purpose

Vibely showcases a full-stack social media application that integrates modern frontend frameworks, data fetching patterns, schema validation, and Backend-as-a-Service solutions to deliver a scalable, maintainable web experience for developers exploring advanced React and TypeScript workflows.
