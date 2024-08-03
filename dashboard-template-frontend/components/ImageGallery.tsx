// ImageGallery.tsx
interface ImageGalleryProps {
  images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  if (images.length === 0) {
    return <p className="text-muted-foreground">No images retrieved yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index} className="aspect-square overflow-hidden rounded-md">
          <img
            src={image}
            alt={`Retrieved image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}