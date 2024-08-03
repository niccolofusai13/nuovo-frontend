'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { RetrievalForm } from '@/components/RetrievalForm';
import { ImageGallery } from '@/components/ImageGallery';
import { retrieveImages } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

export default function RetrievalPage() {
  const [images, setImages] = useState<string[]>([]);

  const handleRetrieval = async (input: string, isImage: boolean) => {
    const retrievedImages = await retrieveImages(input, isImage);
    setImages(retrievedImages);
  };

  return (
    <PageLayout>
      <div className="flex flex-col space-y-4 p-4 md:p-8 bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Image Retrieval</h1>
          <Button>Export</Button>
        </div>
        
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Retrieve Images</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="text" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="text">Text</TabsTrigger>
                <TabsTrigger value="image">Image URL</TabsTrigger>
              </TabsList>
              <TabsContent value="text">
                <RetrievalForm onSubmit={handleRetrieval} isImage={false} />
              </TabsContent>
              <TabsContent value="image">
                <RetrievalForm onSubmit={handleRetrieval} isImage={true} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Retrieved Images</CardTitle>
          </CardHeader>
          <CardContent>
            <ImageGallery images={images} />
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}