// components/ImageGallery.tsx
interface ImageGalleryProps {
  images: { url: string; caption: string }[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  if (images.length === 0) {
    return <p className="text-muted-foreground">No images retrieved yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index} className="flex flex-col">
          <div className="aspect-square overflow-hidden rounded-md">
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{image.caption}</p>
        </div>
      ))}
    </div>
  );
}