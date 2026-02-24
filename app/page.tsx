"use client"

import { useState, useMemo } from "react"
import { Film } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { FeaturedHero } from "@/components/featured-hero"
import { VideoGrid } from "@/components/video-grid"
import { VideoPlayer } from "@/components/video-player"
import { GenreFilter } from "@/components/genre-filter"
import { dramas, type Drama } from "@/lib/video-data"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeGenre, setActiveGenre] = useState<string | null>(null)
  const [selectedDrama, setSelectedDrama] = useState<Drama | null>(null)

  const featuredDrama = dramas.find((d) => d.featured) ?? dramas[0]

  const allGenres = useMemo(() => {
    const genreSet = new Set<string>()
    dramas.forEach((d) => d.genre.forEach((g) => genreSet.add(g)))
    return Array.from(genreSet).sort()
  }, [])

  const filteredDramas = useMemo(() => {
    return dramas.filter((d) => {
      const matchesSearch = d.title.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesGenre = activeGenre === null || d.genre.includes(activeGenre)
      return matchesSearch && matchesGenre
    })
  }, [searchQuery, activeGenre])

  const handleSelectDrama = (drama: Drama) => {
    setSelectedDrama(drama)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleBack = () => {
    setSelectedDrama(null)
  }

  if (selectedDrama) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <main>
          <VideoPlayer drama={selectedDrama} onBack={handleBack} />

          {/* More Dramas */}
          <div className="mx-auto max-w-7xl px-4 pb-12 pt-2 lg:px-8">
            <VideoGrid
              title="More Dramas"
              dramas={dramas.filter((d) => d.id !== selectedDrama.id)}
              onSelect={handleSelectDrama}
            />
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        <div className="flex flex-col gap-8">
          {!searchQuery && !activeGenre && (
            <FeaturedHero drama={featuredDrama} onSelect={handleSelectDrama} />
          )}

          <GenreFilter
            genres={allGenres}
            activeGenre={activeGenre}
            onGenreChange={setActiveGenre}
          />

          <VideoGrid
            title={
              searchQuery
                ? `Search results for "${searchQuery}"`
                : activeGenre
                  ? activeGenre
                  : "All Dramas"
            }
            dramas={filteredDramas}
            onSelect={handleSelectDrama}
          />
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-8 text-center text-sm text-muted-foreground lg:flex-row lg:justify-between lg:px-8 lg:text-left">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
              <Film className="h-3 w-3 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">Hithu Kdrama 2.0</span>
          </div>
          <p>© 2026 Hithu Kdrama 2.0.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-foreground">Privacy</span>
            <span className="cursor-pointer hover:text-foreground">Terms</span>
            <span className="cursor-pointer hover:text-foreground">Contact</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
