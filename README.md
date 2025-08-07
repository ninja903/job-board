#  Job Board – Fullstack Job Platform

A fullstack job board platform built with **Next.js (App Router)** and **TypeScript**, featuring secure authentication, DB integration, email notifications, and event-driven workflows—all wrapped in a pleasant UI powered by Tailwind CSS and ShadCN UI.

---

##  Tech Stack

| Layer            | Technology                              | Functionality                                                  |
|------------------|------------------------------------------|----------------------------------------------------------------|
| Frontend         | Next.js (App Router) + React             | UI rendering, routing, SSR/SSG                                 |
| Language         | TypeScript                               | Static typing, better code quality                             |
| Styling          | Tailwind CSS + ShadCN UI                | Fast, responsive, utility-first UI design                      |
| Database & ORM   | PostgreSQL + Drizzle ORM                | Schema-driven data modeling and migrations                     |
| Authentication   | Clerk                                   | User sign-in/sign-up and session management                    |
| Emails           | Resend + React Email                    | Sending and previewing transactional emails                    |
| Event Queue      | Inngest                                 | Handling background or event-driven workflows                  |
| Deployment       | Vercel                                  | Production hosting with CI/CD setup                            |

---

##  Project Structure

├── public/
├── src/
│ ├── app/ # Next.js App Router pages
│ ├── components/ # Reusable UI components
│ ├── drizzle/ # Drizzle ORM schemas & migrations
│ ├── features/ # Domain-specific modules (e.g. jobs, auth)
│ ├── lib/ # Utility helpers
│ ├── services/ # External service integrations (email, Inngest)
│ └── state/ # Client-side state management
├── drizzle.config.ts
├── docker-compose.yml
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── eslint.config.mjs
└── README.md



##  Installation & Setup



 **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

 **Environment variables**
    - Duplicate and customize from `.env.example`:
      ```env
      DATABASE_URL=postgresql://...
      CLERK_PUBLISHABLE_KEY=...
      CLERK_SECRET_KEY=...
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
      RESEND_API_KEY=...
      ```

4. **Database setup**
    ```bash
    npx drizzle-kit push
    # or (if migrations)
    npm run db:migrate
    ```

5. **Start development**
    ```bash
    npm run dev
    ```
    Visit [http://localhost:3000](http://localhost:3000)

6. **Email Preview (React Email)**
    ```bash
    npm run email
    ```
    Visit [http://localhost:3001](http://localhost:3001)

7. **Run Inngest locally**
    ```bash
    npm run inngest
    ```

---

##  Scripts Summary

| Script         | Description                                 |
|----------------|---------------------------------------------|
| `dev`          | Launch dev server and live reload            |
| `build`        | Build app for production                     |
| `start`        | Serve production build locally               |
| `db:migrate`   | Run Drizzle migrations (if applicable)       |
| `email`        | Email preview server for React Email         |
| `inngest`      | Run Inngest event listener locally           |
| `lint`         | Run ESLint checks (if configured)            |
| `test`         | Run test suite (if configured)               |

---

##  Deployment (Vercel)

1. Push code to GitHub.
2. Import project on [Vercel](https://vercel.com).
3. Add environment variables matching `.env.example`.
4. Deploy—Vercel auto-detects Next.js and handles builds.

---

##  Best Practices & Recommendations

- Modular architecture with `features/` enables scalable growth.
- Use TypeScript for type safety and maintainability.
- Employ React Email + Resend for transactional and customizable emails.
- Handle jobs-related workflows or notifications via Inngest.

---

##  Documentation & Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Clerk Authentication](https://clerk.dev/docs)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Resend Email](https://resend.com/)
- [Inngest Events](https://inngest.com/docs)
- [Vercel](https://vercel.com/docs)

---

##  Contributing

1. Fork this repo
2. Create a new branch (`git checkout -b feat/awesome-job`)
3. Commit your changes (`git commit -m "feat: add search filter"`)
4. Push the branch (`git push origin feat/awesome-job`)
5. Open a Pull Request!

---

##  License

MIT License — see `LICENSE` file for details.

---




