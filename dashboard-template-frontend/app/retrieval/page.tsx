'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { RetrievalForm } from '@/components/RetrievalForm';
import { ImageGallery } from '@/components/ImageGallery';
import { retrieveImages } from '@/lib/api';

export default function RetrievalPage() {
  const [images, setImages] = useState<string[]>([]);

  const handleRetrieval = async (input: string, isImage: boolean) => {
    const retrievedImages = await retrieveImages(input, isImage);
    setImages(retrievedImages);
  };

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-light mb-8 text-center">Image Retrieval</h1>
        <RetrievalForm onSubmit={handleRetrieval} />
        <ImageGallery images={images} />
      </div>
    </PageLayout>
  );
}