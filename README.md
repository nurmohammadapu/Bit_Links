# Bit\_Links – URL Shortener App

**Bit\_Links** is a simple and efficient URL shortener application built with **Next.js**, **Node.js**, **MongoDB**, and **JavaScript**. It allows users to generate short URLs that redirect to the original long URLs, making sharing and managing links easier.

## 🔗 Live Demo

👉 [bit-links-wheat.vercel.app](https://bit-links-wheat.vercel.app)

## 🛠️ Tech Stack

* **Frontend**: Next.js (React)
* **Backend**: Node.js + Express
* **Database**: MongoDB
* **Environment**: Vercel (Frontend), MongoDB Atlas (Database)

## 🚀 Features

* Generate short URLs from long links
* Redirect to the original URL when visiting a short link
* Copy short link to clipboard
* Link management via API
* Clean and minimal UI

## 📁 Project Structure

* `pages/`: Contains Next.js routes (frontend and API routes)
* `lib/`: MongoDB connection and utility functions
* `models/`: Mongoose model for storing links
* `components/`: Reusable UI components

## 🔐 Environment Variables

To run the project locally, create a `.env.local` file in the root directory and add the following variables:

```env
NEXT_PUBLIC_HOST=http://localhost:3000
MONGODB_URI=your_mongodb_connection_string
```

* `NEXT_PUBLIC_HOST`: Base URL of the frontend (e.g., `http://localhost:3000` for local dev or your Vercel domain in production)
* `MONGODB_URI`: Your MongoDB connection string (e.g., from MongoDB Atlas)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/nurmohammadapu/bit_links.git
cd bit_links
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Add your `.env.local` file

```env
NEXT_PUBLIC_HOST=http://localhost:3000
MONGODB_URI=your_mongodb_uri
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📦 Deployment

This project is ready to deploy on **Vercel**. Just set the required environment variables in your Vercel dashboard under project settings.
