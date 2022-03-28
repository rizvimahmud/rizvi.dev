import Image, { ImageProps } from "next/image";

export const NextImage = ({ alt, ...props }: ImageProps) => {
  return (
    <div className="relative w-full h-64 md:h-96">
      <Image
        alt={alt}
        {...props}
        layout="fill"
        className="object-cover rounded-xl"
      />
    </div>
  );
};
