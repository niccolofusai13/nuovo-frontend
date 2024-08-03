import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface RetrievalFormProps {
  onSubmit: (input: string, isImage: boolean) => void;
  isImage: boolean;
}

export function RetrievalForm({ onSubmit, isImage }: RetrievalFormProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(input, isImage);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={isImage ? 'Enter image URL' : 'Describe the image you want to retrieve'}
        className="w-full h-9 text-sm"
      />
      <Button type="submit" className="h-9 text-sm px-4">Retrieve Images</Button>
    </form>
  );
}