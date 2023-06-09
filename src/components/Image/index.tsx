import { useState } from 'react';

export interface ImageProps {
  src: string | undefined;
  alt: string;

  className?: string;
  title?: string;
  randomImage?: number;
}

declare global {
  interface Window {
    randomImages: string[];
    missingIcon: string;
  }
}

const Image = ({ src, alt, title, className, randomImage }: ImageProps) => {
  const [error, setError] = useState(src === undefined);
  const fallback = randomImage
    ? window.randomImages[randomImage % window.randomImages.length]
    : window.missingIcon;

  return (
    <img
      alt={alt}
      src={error || src === '' ? fallback : src}
      title={title}
      className={className}
      onError={() => {
        setError(true);
      }}
      draggable="false"
    />
  );
};

Image.defaultProps = {
  title: undefined,
  className: undefined,
  randomImage: undefined,
};

export default Image;
