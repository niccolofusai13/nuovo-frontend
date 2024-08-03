import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageResult {
  key: string;
  caption: string;
  url: string;
  score: number;
}

interface ImageGalleryProps {
  images: ImageResult[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 20;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  if (images.length === 0) {
    return <p className="text-muted-foreground">No images retrieved yet.</p>;
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentImages.map((image) => (
          <Card key={image.key} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-square relative">
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2">
                <p className="text-sm text-muted-foreground line-clamp-2">{image.caption}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-muted-foreground">
          Showing {indexOfFirstImage + 1}-{Math.min(indexOfLastImage, images.length)} of {images.length} images
        </p>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Prev
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}