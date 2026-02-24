"use client"

import Image from "next/image"
import { Play, Tv } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Drama } from "@/lib/video-data"

interface VideoCardProps {
  drama: Drama
  onSelect: (drama: Drama) => void
}

export function VideoCard({ drama, onSelect }: VideoCardProps) {
  return (
    <button
      onClick={() => onSelect(drama)}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card text-left transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-secondary">
        <Image
          src={drama.posterUrl}
          alt={`${drama.title} poster`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg backdrop-blur">
            <Play className="h-6 w-6 fill-current" />
          </div>
        </div>
        <div className="absolute left-2 top-2">
          <Badge className="bg-black/70 text-foreground backdrop-blur-sm">
            <Tv className="mr-1 h-3 w-3" />
            {drama.episodeCount} EP
          </Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-3">
        <h3 className="line-clamp-1 text-sm font-semibold text-foreground">{drama.title}</h3>
        <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
          <span>{drama.year}</span>
          <span className="inline-block h-1 w-1 rounded-full bg-muted-foreground" />
          <span>{drama.genre[0]}</span>
        </div>
      </div>
    </button>
  )
}
