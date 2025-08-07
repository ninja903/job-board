# 🧑‍💻 Job Board – Next.js Fullstack Application

A fullstack job board platform built using **Next.js App Router**, **TypeScript**, **Drizzle ORM**, **Clerk Auth**, **PostgreSQL**, **Resend (email)**, and **Inngest (event-driven workflows)**.

---

## 🚀 Tech Stack

* **Frontend**: Next.js 15 (App Router), React 19, Tailwind CSS
* **Backend**: Node.js, Drizzle ORM, PostgreSQL
* **Auth**: Clerk
* **Emails**: Resend + React Email
* **Job Queue / Events**: Inngest
* **Styling**: Tailwind CSS 4, ShadCN UI

---

## 🛠️ Getting Started


###  Install dependencies

```bash
npm install
# or
yarn install
```

###  Setup environment variables

Create a `.env.local` file based on `.env.example` and configure:

```env
DATABASE_URL=your_postgres_connection_url
CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
RESEND_API_KEY=...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
```

###  Set up the database

```bash
npx drizzle-kit push
```

Or if using migrations:

```bash
npm run db:migrate
```

###  Start development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 📧 Preview Emails Locally

To preview React Email components:

```bash
npm run email
```

Runs a local preview server at [http://localhost:3001](http://localhost:3001)

---

## 🧪 Run Inngest Dev Server

To handle Inngest events locally:

```bash
npm run inngest
```

---

## 📁 Folder Structure

```bash
src/
├── app/                 # Next.js app router
├── components/          # Shared UI components
├── drizzle/             # Database schema & migrations
├── features/            # Feature-based modules (jobListings, auth, etc.)
├── lib/                 # Utility functions
├── services/            # Email and Inngest
└── state/               # Client state (e.g., Redux)
```

---


## 📦 Deploy

You can deploy this app easily with [Vercel](https://vercel.com/):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ninja903/job-board)
