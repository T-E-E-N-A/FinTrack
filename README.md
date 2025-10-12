# 🚀 FinTrack

**FinTrack** is a real-world, full-stack AI-powered finance platform built with cutting-edge technologies like **Next.js**, **Supabase**, **Tailwind CSS**, **Prisma**, **Inngest**, **ArcJet**, and **Shadcn UI**. It delivers intelligent financial insights, secure user flows, and scalable architecture for modern fintech applications.

---

## 🧠 Features

- 🔐 **Authentication** via Clerk with custom onboarding
- 📊 **AI-driven financial analytics** powered by Gemini API
- 🧵 **Event-driven workflows** using Inngest
- 🧬 **Secure backend logic** with ArcJet
- 🎨 **Elegant UI** built with Shadcn components and Tailwind CSS
- 🗃️ **Database ORM** via Prisma with Supabase Postgres
- 📩 **Transactional emails** via Resend
- 🌗 **Dark mode support** and responsive layout

---

## 🏗️ Tech Stack

| Frontend       | Backend        | Infra & Auth     | AI & Events     | Styling         |
|----------------|----------------|------------------|------------------|------------------|
| Next.js 14     | Prisma ORM     | Clerk Auth       | Gemini API       | Tailwind CSS     |
| React + TS     | Supabase DB    | ArcJet Security  | Inngest Workflows| Shadcn UI        |

---

## ⚙️ Setup Instructions

### 1. Clone the Repo
```bash
git clone https://github.com/T-E-E-N-A/FinTrack.git
cd FinTrack
```

### 2. Install Dependencies

```bash
npm i
```

### 3. Configure Environment Variables

```bash
DATABASE_URL=
DIRECT_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
GEMINI_API_KEY=
RESEND_API_KEY=
ARCJET_KEY=
```

### 4. Run Locally

```bash
npm run dev
#Server will start on port 3000
```

### Folder Structure
```bash
├── app/                # Next.js app directory
├── components/         # Reusable UI components
├── prisma/             # Prisma schema and migrations
├── lib/                # Utility functions and API wrappers
├── hooks/              # Custom React hooks
├── emails/             # Resend email templates
├── public/             # Static assets
```

