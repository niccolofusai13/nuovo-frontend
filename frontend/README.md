```markdown
# Next.js 14 Admin Dashboard Template

A modern admin dashboard built with the Next.js App Router.

## Tech Stack

- [Next.js](https://nextjs.org) - React framework for building web applications
- [TypeScript](https://www.typescriptlang.org) - Typed superset of JavaScript
- [Auth.js](https://authjs.dev) - Authentication for Next.js
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS

## Getting Started

Follow these steps to set up the project locally:

1. Clone the repository:
   ```
   git clone https://github.com/niccolofusai13/nuovo-frontend
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or if you prefer using pnpm:
   ```
   pnpm install
   ```

3. Set up environment variables:
   Copy the `.env.example` file to `.env.local`:
   ```
   cp .env.example .env.local
   ```
   Update the variables in `.env.local` as needed for your local development environment.

4. Start the development server:
   ```
   npm run dev
   ```
   or with pnpm:
   ```
   pnpm dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the application running.

## Project Structure

- `/app` - Contains all the routes, components, and logic for your application, all colocated with the routes
- `/components` - Houses all the reusable UI components
- `/lib` - Includes utility functions, custom hooks, and reusable logic
- `/styles` - Global styles and Tailwind CSS configuration

## Customization

- Update the color scheme in `tailwind.config.js`
- Modify the layout in `app/layout.tsx`
- Add new components in the `/components` directory
- Create new routes by adding directories and page files in the `/app` directory
```
