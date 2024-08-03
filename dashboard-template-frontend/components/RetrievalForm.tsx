// components/RetrievalForm.tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { searchImages } from '@/lib/api';

interface RetrievalFormProps {
  onSubmit: (results: any[]) => void;
  isImage: boolean;
}

export function RetrievalForm({ onSubmit, isImage }: RetrievalFormProps) {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const results = await searchImages(input, isImage);
      onSubmit(results);
    } catch (error) {
      console.error('Error retrieving images:', error);
      // Handle error (e.g., show error message to user)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={isImage ? 'Enter image URL' : 'Describe the image you want to retrieve'}
        className="w-full h-9 text-sm"
      />
      <Button type="submit" className="h-9 text-sm px-4" disabled={isLoading}>
        {isLoading ? 'Retrieving...' : 'Retrieve Images'}
      </Button>
    </form>
  );
}