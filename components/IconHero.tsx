import Image from 'next/image';
import React from 'react';

import Me from '#/public/static/images/me.jpg';
import { BlurredPhoto } from '#/types';

type Props = {
  img?: BlurredPhoto;
  alt?: string;
};
const IconHero = ({ img, alt }: Props) => {
  return (
    <div className="page-icon-hero page-icon-image">
      {img && alt && (
        <Image
          className="page-icon"
          placeholder="blur"
          blurDataURL={img.base64}
          alt={alt}
          src={img.src}
          width={img.width}
          height={img.height}
        />
      )}
      <Image className="page-icon" alt="zyk" src={Me} />
    </div>
  );
};

export default IconHero;
