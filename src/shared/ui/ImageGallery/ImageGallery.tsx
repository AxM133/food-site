import { useState } from 'react'
import { cn } from '@/shared/lib/cn'

type ImageGalleryProps = {
    images: string[]
    alt: string
}

export function ImageGallery({ images, alt }: ImageGalleryProps) {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div>
            <img
                src={images[activeIndex]}
                alt={alt}
                className="aspect-4/3 w-full object-cover"
            />

            {images.length > 1 && (
                <ul className="mt-6 grid grid-cols-3 gap-6">
                    {images.map((src, index) => (
                        <li key={`${index}-${src}`}>
                            <button
                                type="button"
                                aria-label={`Фото ${index + 1}`}
                                onClick={() => setActiveIndex(index)}
                                className={cn(
                                    'block w-full cursor-pointer border-2 transition-opacity',
                                    index === activeIndex
                                        ? 'border-gold'
                                        : 'border-transparent opacity-70 hover:opacity-100',
                                )}
                            >
                                <img
                                    src={src}
                                    alt=""
                                    className="aspect-4/3 w-full object-cover"
                                />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
