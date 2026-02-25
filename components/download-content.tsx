"use client"

import Link from "next/link"
import { ArrowLeft, Film, Send, HardDrive } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Drama, Episode } from "@/lib/video-data"

interface DownloadContentProps {
  drama: Drama
  episode: Episode
}

export function DownloadContent({ drama, episode }: DownloadContentProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Simple Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-3xl items-center gap-3 px-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Film className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">Hithu Kdrama 2.0</span>
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to player
          </Link>

          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="border-b border-border bg-secondary/50 px-6 py-5">
              <h1 className="text-xl font-bold text-foreground">{drama.title}</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Episode {episode.number} - {episode.title.replace(`Episode ${episode.number} - `, "")}
              </p>
            </div>

            <div className="flex flex-col gap-3 p-6">
              <p className="mb-2 text-center text-sm text-muted-foreground">
                Choose your preferred download method
              </p>

              <a
                href={episode.telegramUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  size="lg"
                  className="w-full gap-3 bg-[#0088cc] text-[#ffffff] hover:bg-[#0077b3]"
                >
                  <Send className="h-5 w-5" />
                  Telegram Download
                </Button>
              </a>

              <a
                href={episode.googleDriveUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  size="lg"
                  className="w-full gap-3 bg-[#1a73e8] text-[#ffffff] hover:bg-[#1557b0]"
                >
                  <HardDrive className="h-5 w-5" />
                  Google Drive Download
                </Button>
              </a>
            </div>

            <div className="border-t border-border px-6 py-4">
              <p className="text-center text-xs text-muted-foreground">
                If a link is broken, please contact us via Telegram.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
