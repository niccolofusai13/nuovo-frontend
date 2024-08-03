'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface RetrievalFormProps {
  onSubmit: (input: string, isImage: boolean) => void;
}

export function RetrievalForm({ onSubmit }: RetrievalFormProps) {
  const [input, setInput] = useState('');
  const [isImage, setIsImage] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(input, isImage);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-700">Input Type</div>
            <div className="flex space-x-2">
              <Button
                type="button"
                variant={isImage ? "outline" : "default"}
                onClick={() => setIsImage(false)}
                className="flex-1"
              >
                Text
              </Button>
              <Button
                type="button"
                variant={isImage ? "default" : "outline"}
                onClick={() => setIsImage(true)}
                className="flex-1"
              >
                Image URL
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-700">
              {isImage ? 'Enter image URL' : 'Enter text'}
            </div>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isImage ? 'https://example.com/image.jpg' : 'Describe the image you want to retrieve'}
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full">Retrieve Images</Button>
        </form>
      </CardContent>
    </Card>
  );
}