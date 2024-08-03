// app/retrieval/page.tsx
'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/PageLayout';
import { RetrievalForm } from '@/components/RetrievalForm';
import { ImageGallery } from '@/components/ImageGallery';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

interface SearchResult {
  key: string;
  caption: string;
  url: string;
  score: number;
}

export default function RetrievalPage() {
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleRetrieval = (newResults: SearchResult[]) => {
    setResults(newResults);
  };

  return (
    <PageLayout>
      <div className="flex flex-col space-y-4 p-4 md:p-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Image Retrieval</h1>
          <Button size="sm" variant="outline" className="h-8 px-3 flex items-center gap-2">
            <FileText size={16} />
            Export
          </Button>
        </div>
        
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-lg">Retrieve Images</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Retrieve similar images based on your description.
            </p>
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
            <CardTitle className="text-lg">Retrieved Images</CardTitle>
          </CardHeader>
          <CardContent>
            <ImageGallery images={results} />
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}