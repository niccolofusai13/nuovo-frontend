import { Card, CardContent } from '@/components/ui/card';

interface ImageGalleryProps {
  images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  if (images.length === 0) return null;

  return (
    <Card className="mt-8">
      <CardContent>
        <h2 className="text-2xl font-light mb-4">Retrieved Images</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Retrieved image ${index + 1}`}
              className="w-full h-48 object-cover rounded-md"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}