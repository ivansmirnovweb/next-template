import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FEATURES, HIGHLIGHTS } from './constants';

export const MainPage = () => {
  return (
    <section className="relative left-1/2 isolate flex min-h-[calc(100svh-12rem)] w-screen -translate-x-1/2 overflow-hidden border border-border/70 bg-card/70 px-6 py-10 shadow-sm backdrop-blur-sm sm:px-10 sm:py-14 lg:px-16 lg:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(120,119,198,0.12),_transparent_34%),linear-gradient(135deg,_rgba(255,255,255,0.5),_transparent_40%)] opacity-90 dark:bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.14),_transparent_34%),linear-gradient(135deg,_rgba(255,255,255,0.02),_transparent_40%)]" />
      <div className="pointer-events-none absolute -top-24 right-[-4rem] size-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 left-[-5rem] size-80 rounded-full bg-secondary/60 blur-3xl" />

      <div className="relative z-10 grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
        <div className="max-w-3xl space-y-6">
          <Badge
            variant="outline"
            className="rounded-full px-3 py-1 text-[11px] tracking-[0.22em] uppercase"
          >
            Next template
          </Badge>

          <div className="space-y-4">
            <h1 className="font-heading text-4xl leading-[0.95] font-medium tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Шаблон для Next.js проекта
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Аккуратная оболочка для App Router, UI-примитивов, темы и базовых
              экранов проекта.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/components">Открыть UI</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/sections">Смотреть секции</Link>
            </Button>
          </div>

          <ul className="flex flex-wrap gap-2 pt-2">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border/70 bg-background/75 px-3 py-1.5 text-sm text-muted-foreground shadow-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-[28px] border border-border/70 bg-background/75 p-5 shadow-sm backdrop-blur-md sm:p-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                  Что здесь есть
                </p>
                <p className="font-heading text-2xl font-medium text-foreground">
                  Чистый шаблон для старта
                </p>
              </div>

              <div className="grid gap-3">
                {FEATURES.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border/60 bg-card/80 p-4"
                  >
                    <p className="text-sm font-medium text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
