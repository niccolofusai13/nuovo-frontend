interface ImageGalleryProps {
    images: string[];
  }
  
  export default function ImageGallery({ images }: ImageGalleryProps) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Retrieved image ${index + 1}`}
            className="w-full rounded-md object-cover aspect-square"
          />
        ))}
      </div>
    );
  }