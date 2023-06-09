import { useState } from 'react';
import missingIcon from 'assets/images/missing.png';
import bannerImage from 'assets/images/random/banner.webp';
import cat1Image from 'assets/images/random/cat1.webp';
import cat2Image from 'assets/images/random/cat2.webp';
import cat3Image from 'assets/images/random/cat3.webp';

export interface ImageProps {
  src: string | undefined;
  alt: string;

  className?: string;
  title?: string;
  randomImage?: number;
}

const randomImages = [bannerImage, cat1Image, cat2Image, cat3Image];

const Image = ({ src, alt, title, className, randomImage }: ImageProps) => {
  const [error, setError] = useState(src === undefined);
  const fallback = randomImage
    ? randomImages[randomImage % randomImages.length]
    : missingIcon;

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
