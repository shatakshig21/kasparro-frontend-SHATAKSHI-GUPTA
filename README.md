Kasparro Frontend — AI-Native SEO Platform

This project is a frontend prototype for Kasparro, an AI-native SEO & Brand Intelligence platform designed for the era of AI search engines and large language models.
The application demonstrates modern frontend engineering practices using Next.js App Router, TypeScript, Tailwind CSS, and Zustand for state management.

🌐 Live Demo

👉 Deployed Application:
https://kasparro-frontend-shatakshi-gupta.vercel.app/

✨ Product Overview

Traditional SEO focuses on keywords, backlinks, and SERP rankings.
Kasparro is built for AI-first search systems, where content is interpreted, summarized, and cited by large language models.

Why AI-Native SEO is Different

AI-Native SEO focuses on entity understanding, semantic relevance, and contextual authority, rather than keyword density alone.
Instead of optimizing only for search engine crawlers, AI-SEO optimizes how LLMs interpret brands, concepts, and entities when generating answers.

Key differences include:

Entity-based brand signals instead of keyword stuffing

Contextual relevance across topics and queries

Optimization for AI-generated answers, not just SERP rankings

Brand visibility within conversational and generative search results

🧱 Tech Stack

Framework: Next.js 16.1.1 (App Router)

Language: TypeScript

Styling: Tailwind CSS

State Management: Zustand

Data Source: Static JSON (single source of truth)

Deployment: Vercel

📁 Project Structure
app/
 ├─ layout.tsx        # Global layout
 ├─ page.tsx          # Homepage
 ├─ about/            # About page
 ├─ platform/         # Platform overview
 ├─ app/              # Product sections
 │   ├─ dashboard/
 │   ├─ audit/
 │   └─ architecture/

components/
 ├─ layout/           # Layout components
 ├─ ui/               # Reusable UI primitives
 └─ features/         # Feature-level components

data/
 ├─ audit.json        # Audit data (single source of truth)
 └─ platform.json     # Platform data

store/
 └─ useAuditStore.ts  # Zustand global state

types/
 └─ audit.ts          # Strongly typed data models

🧠 Data Modeling & State Management

TypeScript interfaces in types/ define all data contracts

JSON files act as a single source of truth

Zustand manages:

Selected brand

Active audit module

Cross-page UI state

No hardcoded JSX data — all content is abstracted and typed

This ensures predictable data flow and easy scalability.

🎨 Styling & UX

Tailwind CSS with a clean, minimal design system

Proper typography via next/font/google

Clear UX hierarchy for dense audit and dashboard data

Modular components for maintainability

🚀 Local Development Setup
Prerequisites

Node.js 18+

npm or yarn

Install Dependencies
npm install

Run Development Server
npm run dev


The app will be available at:

http://localhost:3000

🏗️ Production Build
npm run build
npm run start

🧩 Design Decisions

App Router used for clean layout composition

Zustand chosen for simplicity and predictability

JSON-driven UI to simulate real backend-driven dashboards

Strong separation of concerns between UI, state, and data

Built with scalability and AI-native SaaS patterns in mind

✅ Assignment Scope

This project satisfies all requirements of the Kasparro Frontend Engineering Assignment, including:

Modern Next.js architecture

Strong TypeScript usage

Clean component boundaries

Predictable state management

AI-native SEO product thinking

Production deployment

👤 Author

Shatakshi Gupta
Frontend Engineering Assignment — Kasparro