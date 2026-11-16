"use client";

import Image from "next/image";
import { useState } from "react";
import { Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Product photograph with a quiet branded placeholder when no photo has
 * been uploaded yet (or the image fails to load). Never an emoji.
 */
export function ProductImage({ src, alt, sizes, className, priority }: { src: string | null; alt: string; sizes: string; className?: string; priority?: boolean }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div className={cn("flex h-full w-full flex-col items-center justify-center gap-2 bg-beige text-forest/70", className)} role="img" aria-label={alt}>
        <Leaf className="size-8" strokeWidth={1.4} aria-hidden="true" />
        <span className="max-w-[80%] truncate text-xs font-semibold tracking-wide uppercase">{alt}</span>
      </div>
    );
  }
  return (
    <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={cn("object-cover", className)} onError={() => setFailed(true)} />
  );
}
