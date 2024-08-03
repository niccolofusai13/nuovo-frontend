import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Home, Image, Settings, User, ChevronRight, FileText } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { usePathname } from 'next/navigation';

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const pathname = usePathname();

  const NavItem = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={`p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors ${
            pathname === href ? 'bg-gray-100 text-gray-900' : ''
          }`}
        >
          {icon}
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-14 bg-white border-r flex flex-col items-center py-4 space-y-4">
        <Link href="/" className="p-2 rounded-full bg-primary text-white">
          A
        </Link>
        <NavItem href="/" icon={<Home size={20} />} label="Dashboard" />
        <NavItem href="/retrieval" icon={<Image size={20} />} label="Retrieval" />
        <div className="flex-grow" />
        <NavItem href="/settings" icon={<Settings size={20} />} label="Settings" />
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b px-4 py-2 flex items-center justify-between">
          <nav>
            <ul className="flex space-x-1 items-center">
              <li><Link href="/" className="text-sm text-gray-600 hover:text-primary">Dashboard</Link></li>
              <ChevronRight size={16} className="text-gray-400" />
              <li><Link href="/retrieval" className="text-sm text-gray-600 hover:text-primary">Retrieval</Link></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <Input type="search" placeholder="Search..." className="w-64 h-8 text-sm" />
            <Button size="sm" variant="ghost">
              <User size={18} />
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