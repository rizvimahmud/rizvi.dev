import Image, { ImageProps } from "next/image";
import { useState } from "react";
import cn from "clsx";

export const NextImage = ({ alt, ...props }: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex rounded-lg overflow-hidden">
      <Image
        alt={alt}
        {...props}
        className={cn(
          "object-cover duration-700 ease-in-out",
          isLoading
            ? "scale-105 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        )}
        onLoadingComplete={async () => setIsLoading(false)}
      />
    </div>
  );
};
