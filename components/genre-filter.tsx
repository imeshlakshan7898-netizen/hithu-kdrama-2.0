"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface GenreFilterProps {
  genres: string[]
  activeGenre: string | null
  onGenreChange: (genre: string | null) => void
}

export function GenreFilter({ genres, activeGenre, onGenreChange }: GenreFilterProps) {
  return (
    <ScrollArea className="w-full">
      <div className="flex gap-2 pb-2">
        <Button
          variant={activeGenre === null ? "default" : "secondary"}
          size="sm"
          onClick={() => onGenreChange(null)}
          className={
            activeGenre === null
              ? "shrink-0 bg-primary text-primary-foreground hover:bg-primary/90"
              : "shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }
        >
          All Genres
        </Button>
        {genres.map((genre) => (
          <Button
            key={genre}
            variant={activeGenre === genre ? "default" : "secondary"}
            size="sm"
            onClick={() => onGenreChange(genre)}
            className={
              activeGenre === genre
                ? "shrink-0 bg-primary text-primary-foreground hover:bg-primary/90"
                : "shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }
          >
            {genre}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
