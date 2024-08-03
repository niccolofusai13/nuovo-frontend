// PageLayout.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Home, Image, Settings, User } from 'lucide-react';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-16 bg-white border-r flex flex-col items-center py-4 space-y-4">
        <Link href="/" className="p-2 rounded-full bg-primary text-white">
          A
        </Link>
        <Link href="/" className="p-2 text-gray-600 hover:text-primary">
          <Home size={24} />
        </Link>
        <Link href="/retrieval" className="p-2 text-gray-600 hover:text-primary">
          <Image size={24} />
        </Link>
        <div className="flex-grow" />
        <Link href="/settings" className="p-2 text-gray-600 hover:text-primary">
          <Settings size={24} />
        </Link>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b px-4 py-2 flex items-center justify-between">
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="text-sm text-gray-600 hover:text-primary">Dashboard</Link></li>
              <li><Link href="/retrieval" className="text-sm text-gray-600 hover:text-primary">Retrieval</Link></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <Input type="search" placeholder="Search..." className="w-64" />
            <Button size="icon" variant="ghost">
              <User size={20} />
            </Button>
          </div>
        </header>
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}