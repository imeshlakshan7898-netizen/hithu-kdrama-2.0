"use client"

import Image from "next/image"
import { Play, Calendar, Tv } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Drama } from "@/lib/video-data"

interface FeaturedHeroProps {
  drama: Drama
  onSelect: (drama: Drama) => void
}

export function FeaturedHero({ drama, onSelect }: FeaturedHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-border">
      <div className="relative aspect-[21/9] w-full lg:aspect-[3/1]">
        <Image
          src={drama.posterUrl}
          alt={`${drama.title} featured banner`}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-end p-6 lg:items-center lg:p-12">
          <div className="max-w-xl">
            <Badge className="mb-3 bg-primary text-primary-foreground">Featured Drama</Badge>
            <h2 className="text-balance text-3xl font-bold text-foreground lg:text-5xl">
              {drama.title}
            </h2>

            <div className="mt-3 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {drama.year}
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Tv className="h-4 w-4" />
                {drama.episodeCount} Episodes
              </div>
              <div className="flex gap-2">
                {drama.genre.map((g) => (
                  <Badge
                    key={g}
                    variant="secondary"
                    className="bg-foreground/10 text-foreground backdrop-blur-sm"
                  >
                    {g}
                  </Badge>
                ))}
              </div>
            </div>

            <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground lg:text-base">
              {drama.description}
            </p>

            <div className="mt-6">
              <Button
                size="lg"
                onClick={() => onSelect(drama)}
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Play className="h-5 w-5 fill-current" />
                Watch Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
