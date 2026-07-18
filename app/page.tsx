"use client"

import { useState, useMemo } from "react"
import { Film } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
//import { FeaturedHero } from "@/components/featured-hero" 
import { VideoGrid } from "@/components/video-grid"
import { VideoPlayer } from "@/components/video-player"
import { GenreFilter } from "@/components/genre-filter"
import { dramas, type Drama } from "@/lib/video-data"
import { facebookPages } from "../lib/facebook-pages"

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
  return [...dramas]
    .reverse()
    .filter((d) => {
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
          {/* Facebook Pages */}
<div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/30 p-4">
  <div className="mb-6 flex items-center justify-between">
    <h2 className="text-xl font-semibold text-white">
      Follow Our Facebook Pages
    </h2>

    
  </div>

  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
    {facebookPages.map((page) => (
      <a
        key={page.name}
        href={page.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center rounded-xl border border-zinc-800 bg-zinc-950 p-3"
      >
        <div className="flex items-center gap-4">
          <img
            src={page.image}
            alt={page.name}
            className="h-12 w-12 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold text-white">
              {page.name}
            </h3>

            <p className="text-sm text-gray-400">
              {page.followers}
            </p>
          </div>
        </div>

        
      </a>
    ))}
  </div>
</div>
        </div>
        <div className="mt-5 rounded-lg border border-blue-500/30 bg-blue-500/10 p-4 text-center">

  <p className="text-sm text-gray-300">
    📢 <span className="font-semibold text-white">Facebook Package</span> භාවිතයෙන් නැරඹීමට,
    පහත Facebook Group එකට Join වන්න.
  </p>

  <p className="mt-2 text-xs text-gray-400">
    Join වූ පසු <span className="font-medium text-white">Moderator අනුමැතිය</span> ලබාගැනිමට,
    පහත WhatsApp අංකයට <span className="font-medium text-white">"Moderator Access"</span>
    ලෙස පණිවිඩයක් යොමු කරන්න.
  </p>

  <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">

    <a
      href="https://web.facebook.com/share/g/1LntEf5NtJ/"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
    >
      📘 Facebook Group එකට Join වන්න
    </a>

    <a
      href="https://wa.me/94778191814?text=Moderator%20Access"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg bg-green-600 px-5 py-2 text-sm font-medium text-white hover:bg-green-700"
    >
      💬 WhatsApp Message
    </a>

  </div>

</div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-8 text-center text-sm text-muted-foreground lg:flex-row lg:justify-between lg:px-8 lg:text-left">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
              <Film className="h-3 w-3 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">Hithu Kdrama </span>
          </div>
          <p>© 2026 Hithu Kdrama.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-foreground">Privacy</span>git add .
            <span className="cursor-pointer hover:text-foreground">Terms</span>
            <span className="cursor-pointer hover:text-foreground">Contact</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
