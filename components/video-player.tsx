"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Tv,
  Monitor,
  Download,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Drama } from "@/lib/video-data"

interface VideoPlayerProps {
  drama: Drama
  onBack: () => void
}

export function VideoPlayer({ drama, onBack }: VideoPlayerProps) {
  const [activeEpisode, setActiveEpisode] = useState(0)
  const [activeSource, setActiveSource] = useState(0)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const currentEpisode = drama.episodes[activeEpisode]
  const currentSource = currentEpisode.sources[activeSource]

  const handleEpisodeChange = (index: number) => {
    setActiveEpisode(index)
    setActiveSource(0)
    setDropdownOpen(false)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-4 gap-2 text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to browse
      </Button>

      {/* Player Area */}
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="relative aspect-video w-full bg-black">
          <iframe
            key={`${activeEpisode}-${activeSource}`}
            src={currentSource.embedUrl}
            title={`${drama.title} - ${currentEpisode.title}`}
            className="absolute inset-0 h-full w-full"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>

        {/* Source Buttons */}
        <div className="border-t border-border bg-card p-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Monitor className="h-4 w-4" />
              Source
            </span>
            <div className="flex flex-wrap gap-2">
              {currentEpisode.sources.map((source, index) => (
                <Button
                  key={source.name}
                  variant={activeSource === index ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setActiveSource(index)}
                  className={
                    activeSource === index
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }
                >
                  {source.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Episode Selector + Download */}
      <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        {/* Episode Dropdown */}
        <div className="relative w-full md:w-72">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex w-full items-center justify-between rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <span>
              EP {currentEpisode.number}: {currentEpisode.title.replace(`Episode ${currentEpisode.number} - `, "")}
            </span>
            <ChevronDown
              className={`h-4 w-4 text-muted-foreground transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
            />
          </button>
          {dropdownOpen && (
            <div className="absolute z-30 mt-1 max-h-64 w-full overflow-y-auto rounded-lg border border-border bg-card shadow-xl">
              {drama.episodes.map((ep, index) => (
                <button
                  key={ep.number}
                  onClick={() => handleEpisodeChange(index)}
                  className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-secondary ${
                    activeEpisode === index
                      ? "bg-primary/10 font-semibold text-primary"
                      : "text-foreground"
                  }`}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-secondary text-xs font-bold text-secondary-foreground">
                    {ep.number}
                  </span>
                  <span className="truncate">
                    {ep.title.replace(`Episode ${ep.number} - `, "")}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Download Button */}
        <Link
          href={`/download/${drama.id}/${currentEpisode.number}`}
          target="_blank"
        >
          <Button
            size="lg"
            className="w-full gap-2 bg-emerald-600 text-foreground hover:bg-emerald-700 md:w-auto"
          >
            <Download className="h-4 w-4" />
            Download Episode {currentEpisode.number}
          </Button>
        </Link>
      </div>

      {/* Episode Buttons Grid */}
      <div className="mt-6">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Episodes
        </h3>
        <div className="flex flex-wrap gap-2">
          {drama.episodes.map((ep, index) => (
            <button
              key={ep.number}
              onClick={() => handleEpisodeChange(index)}
              className={`flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-bold transition-all ${
                activeEpisode === index
                  ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-secondary"
              }`}
            >
              {ep.number}
            </button>
          ))}
        </div>
      </div>

      {/* Drama Details */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold text-foreground lg:text-3xl">{drama.title}</h1>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {drama.year}
            </div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Tv className="h-4 w-4" />
              {drama.episodeCount} Episodes
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {drama.genre.map((g) => (
              <Badge key={g} variant="secondary" className="bg-secondary text-secondary-foreground">
                {g}
              </Badge>
            ))}
          </div>
          <p className="mt-4 leading-relaxed text-muted-foreground">{drama.description}</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Now Playing
          </h3>
          <dl className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Episode</dt>
              <dd className="font-medium text-foreground">{currentEpisode.number} of {drama.episodeCount}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Server</dt>
              <dd className="font-medium text-foreground">{currentSource.name}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Available Sources</dt>
              <dd className="font-medium text-foreground">{currentEpisode.sources.length}</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Status</dt>
              <dd className="flex items-center gap-1.5">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                <span className="font-medium text-emerald-400">Online</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
