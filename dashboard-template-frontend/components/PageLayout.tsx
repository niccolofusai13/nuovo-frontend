import Link from 'next/link';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background py-4">
        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-light">NUOVO</Link>
            <ul className="flex space-x-4 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/retrieval" className="hover:text-primary transition-colors">Retrieval</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-background py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 Nuovo</p>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}