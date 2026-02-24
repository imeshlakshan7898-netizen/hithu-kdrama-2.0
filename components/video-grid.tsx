"use client"

import { VideoCard } from "@/components/video-card"
import type { Drama } from "@/lib/video-data"

interface VideoGridProps {
  dramas: Drama[]
  title: string
  onSelect: (drama: Drama) => void
}

export function VideoGrid({ dramas, title, onSelect }: VideoGridProps) {
  if (dramas.length === 0) {
    return (
      <section>
        <h2 className="mb-4 text-xl font-bold text-foreground">{title}</h2>
        <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card py-16">
          <p className="text-muted-foreground">No results found.</p>
          <p className="mt-1 text-sm text-muted-foreground">Try a different search term.</p>
        </div>
      </section>
    )
  }

  return (
    <section>
      <h2 className="mb-4 text-xl font-bold text-foreground">{title}</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {dramas.map((drama) => (
          <VideoCard key={drama.id} drama={drama} onSelect={onSelect} />
        ))}
      </div>
    </section>
  )
}
