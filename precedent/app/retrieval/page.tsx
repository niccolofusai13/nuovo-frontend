'use client';

import { useState } from 'react';
import Card from "@/components/home/card";
import RetrievalForm from "@/components/retrieval/retrieval-form";
import ImageGallery from "@/components/retrieval/image-gallery";

export default function RetrievalPage() {
  const [images, setImages] = useState<string[]>([]);

  const handleRetrieval = async (input: string, isImage: boolean) => {
    // Placeholder: Replace with actual API call
    console.log(`Retrieving for ${isImage ? 'image' : 'text'}: ${input}`);
    // Simulate API response
    setImages(['https://picsum.photos/300/300?random=1', 'https://picsum.photos/300/300?random=2', 'https://picsum.photos/300/300?random=3']);
  };

  return (
    <>
      <h1
        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        Image Retrieval
      </h1>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-1 xl:px-0">
        <Card
          title="Retrieve Images"
          description="Enter text or an image URL to retrieve related images."
          demo={<RetrievalForm onSubmit={handleRetrieval} />}
          large={true}
        />
        {images.length > 0 && (
          <Card
            title="Retrieved Images"
            description="Here are the images based on your input."
            demo={<ImageGallery images={images} />}
            large={true}
          />
        )}
      </div>
    </>
  );
}