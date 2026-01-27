This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
Project Description

Book Catalog is a frontend-focused web application built with Next.js.
The project demonstrates authentication, role-based access control, global state management, and CRUD operations without using a database.

The main goal of this project is to showcase modern frontend architecture and best practices using React and Next.js.

🚀 Features

🔐 Authentication using NextAuth

👥 Role-based access (Admin / User)

🛡️ Protected routes using Next.js Middleware

📊 User Dashboard (authenticated users only)

🛠️ Admin Panel with CRUD operations for books

❤️ Favorites / Cart functionality

🌐 Global state management using Context API

💾 Data persistence using localStorage

🧪 Basic testing with Jest

📱 Fully responsive design using Tailwind CSS

🧰 Tech Stack

Next.js (App Router)

React

TypeScript

Tailwind CSS

NextAuth

Context API

Jest

🔐 Authentication (Test Credentials)

Use the following credentials to test the application:

Admin

Email: admin@test.com

Password: admin123

User

Email: user@test.com

Password: user123

Demo User

Email: demo@bookcatalog.com

Password: demo123

🛡️ Route Protection

/dashboard → accessible only to authenticated users

/admin → accessible only to users with admin role

Route protection is handled centrally using Next.js middleware.

📦 CRUD Functionality

The Admin Panel allows administrators to:

Create new books

Read existing books

Update book details

Delete books

All data is managed on the client-side using React Context and persisted via localStorage.

⚠️ Database Notice

This project does not use a database.
All data is simulated using local state and browser localStorage for demonstration purposes.

🧪 Testing

Basic unit tests are implemented using Jest to validate:

UI components

Authentication logic

Admin context behavior

🛠️ Installation & Setup

Clone the repository

Install dependencies:

npm install


Run the development server:

npm run dev


Open in browser:

http://localhost:3000

🌍 Deployment

The application is deployed on Vercel and configured using environment variables.

👤 Author

Name: Rinesa Smajli , Rina Hoti

Project Type: Academic / Demo Project

🎓 Final Note

This project focuses on demonstrating frontend development concepts, authentication flow, and role-based access control using modern Next.js practices.