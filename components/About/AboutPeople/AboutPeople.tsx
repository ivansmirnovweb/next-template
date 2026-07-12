import Image from "next/image";
import Link from "next/link";

import type { AboutPeopleProps } from "../types";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const AboutPeople = ({
  title,
  description,
  people,
  className,
}: AboutPeopleProps) => {
  return (
    <section
      className={cn(
        "overflow-hidden border-y border-border/70 bg-background py-12 sm:py-16 lg:py-20",
        className,
      )}
    >
      <div className="layout-container">
        <div className="space-y-8 sm:space-y-10">
          <div className="max-w-3xl space-y-3">
            <h2 className="font-heading text-3xl leading-tight font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            {description && (
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                {description}
              </p>
            )}
          </div>

          <div
            className={cn(
              "grid min-w-0 gap-5 md:grid-cols-2 lg:gap-6",
              people.length > 2 && "lg:grid-cols-3",
              people.length === 1 && "max-w-xl",
            )}
          >
            {people.map((person) => (
              <Card
                key={person.id}
                className="min-w-0 gap-0 border border-border/70 bg-card/70 p-0 shadow-sm"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <Image
                    src={person.image.src}
                    alt={person.image.alt}
                    fill
                    sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 1.5rem), 400px"
                    className="object-cover"
                    style={{
                      objectPosition: person.image.objectPosition ?? "50% 35%",
                    }}
                  />
                </div>

                <div className="min-w-0 space-y-4 p-5 sm:p-6">
                  <div className="min-w-0 space-y-1">
                    <h3 className="wrap-break-word font-heading text-xl leading-snug font-medium tracking-tight text-foreground sm:text-2xl">
                      {person.name}
                    </h3>
                    <p className="wrap-break-word text-sm font-medium text-primary sm:text-base">
                      {person.role}
                    </p>
                  </div>

                  <p className="wrap-break-word text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                    {person.description}
                  </p>

                  {!!person.facts?.length && (
                    <ul
                      className="flex flex-wrap gap-2"
                      aria-label={`${person.name} expertise`}
                    >
                      {person.facts.map((fact) => (
                        <li
                          key={fact}
                          className="max-w-full wrap-break-word rounded-full border border-border/70 bg-muted/45 px-3 py-1.5 text-sm leading-5 text-muted-foreground"
                        >
                          {fact}
                        </li>
                      ))}
                    </ul>
                  )}

                  {person.action && (
                    <Button
                      asChild
                      variant={person.action.variant ?? "outline"}
                      className="max-w-full"
                    >
                      <Link href={person.action.href}>
                        {person.action.label}
                      </Link>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
