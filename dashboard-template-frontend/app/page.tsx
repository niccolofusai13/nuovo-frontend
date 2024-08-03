// app/page.tsx

import { Button } from '@/components/ui/button';
import Link from 'next/link';


export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="container mx-auto py-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-xl font-light">NUOVO</h1>
          <ul className="flex space-x-8 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow flex items-center">
      <section className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl sm:text-5xl font-light mb-6 leading-tight">
            Simplify your AI data workflow with <span className="font-normal text-primary">Nuovo</span>
        </h2>
        <p className="text-lg mb-10 text-muted-foreground">Streamline data generation, labeling and curation with our data copilot.</p>
        <Link href="/retrieval" passHref>
          <Button size="lg" variant="outline" className="rounded-full px-8">
            Get Started
          </Button>
        </Link>

        </section>
      </main>

      <footer className="container mx-auto py-6 text-sm text-muted-foreground">
        <div className="flex justify-between items-center">
          <p>&copy; 2024 Nuovo</p>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}