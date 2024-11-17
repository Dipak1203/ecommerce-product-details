"use client";

import Image from "next/image";
import {  useState } from "react";
import Skeleton from "./Skeleton";

export default function ImageGallery({ images }: { images: string[] }) {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [isLoading] = useState(false);
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-full w-full">
          <Skeleton />
        </div>
      ) : (
        <>
          <div className="pb-4">
            <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg ">
              <Image
                width={100}
                height={100}
                src={activeImage}
                alt="Product"
                className="w-[50%] h-[50%] relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
              />
            </div>
          </div>
          <div className="flex space-x-4 overflow-x-auto">
            {images.map((image) => (
              <Image
                key={image}
                src={image}
                width={200}
                height={200}
                alt="Thumbnail"
                className={`w-10 h-10 cursor-pointer rounded-lg border-2 ${
                  image === activeImage
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
                onClick={() => setActiveImage(image)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
