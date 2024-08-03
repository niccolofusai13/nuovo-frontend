'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface RetrievalFormProps {
  onSubmit: (input: string, isImage: boolean) => void;
}

export default function RetrievalForm({ onSubmit }: RetrievalFormProps) {
  const [input, setInput] = useState('');
  const [isImage, setIsImage] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(input, isImage);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        <button
          type="button"
          onClick={() => setIsImage(false)}
          className={`flex-1 rounded-md px-3 py-2 text-sm font-semibold ${
            !isImage ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Text
        </button>
        <button
          type="button"
          onClick={() => setIsImage(true)}
          className={`flex-1 rounded-md px-3 py-2 text-sm font-semibold ${
            isImage ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Image URL
        </button>
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={isImage ? 'Enter image URL' : 'Enter your query'}
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
      />
      <button
        type="submit"
        className="rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
      >
        Retrieve Images
      </button>
    </form>
  );
}