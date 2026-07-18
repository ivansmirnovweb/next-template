import Image from "next/image";

import type { TestimonialsAuthor } from "./types";

export const TestimonialAuthor = ({
  author,
}: {
  author: TestimonialsAuthor;
}) => {
  const authorContext = [author.role, author.company]
    .filter(Boolean)
    .join(", ");

  return (
    <div className="flex min-w-0 items-center gap-3">
      {author.avatar && (
        <div className="relative size-11 shrink-0 overflow-hidden rounded-full bg-muted">
          <Image
            src={author.avatar.src}
            alt={author.avatar.alt}
            fill
            sizes="44px"
            className="object-cover"
            style={{ objectPosition: author.avatar.objectPosition ?? "center" }}
          />
        </div>
      )}
      <div className="min-w-0">
        <p className="wrap-break-word text-sm font-medium text-foreground">
          {author.name}
        </p>
        {authorContext && (
          <p className="wrap-break-word text-sm text-muted-foreground">
            {authorContext}
          </p>
        )}
      </div>
    </div>
  );
};
